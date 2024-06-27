"use client";

import BlogPost from "@/app/components/BlogPost/BlogPost";
import PageLayout from "@/app/layouts/PageLayout";
import { Post } from "@/app/models/types/Post";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";
import DOMPurify from "isomorphic-dompurify";

const DeveloperBlog = () => {
  const [post, setPost] = useState<Post | undefined>(undefined);
  const searchParams = useSearchParams();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 10000000);
    fetch(`https://gist.githubusercontent.com/rajanbajaj/6b604317cf35127a835e8a157d28588d/raw/devBlogs.json${randomNumber}`)
      .then((res) => res.json())
      .then((data) => {
        const sanitizedData = data.map((post: Post) => ({
          ...post,
          body: DOMPurify.sanitize(post.body),
        }));

        const postId = searchParams.get("postId");
        if (postId) {
          const selectedPost = sanitizedData.find((post: Post) => post.id === postId);
          setPost(selectedPost);
        }
      })
      .catch((err) => console.log(err));
  }, [searchParams]);

  return (
    <Suspense fallback={<Loading />}>
      {
        post ?
          <PageLayout title={post?.title}>
            <BlogPost post={post} />
          </PageLayout>
          : <p>Post not found.</p>
      }
    </Suspense>
  );
};

export default DeveloperBlog;