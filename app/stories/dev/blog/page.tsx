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
    fetch("https://gist.githubusercontent.com/rajanbajaj/6b604317cf35127a835e8a157d28588d/raw/772d5b7efd8903057ce153f8c91e53a063d485ae/devBlogs.json")
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
      <PageLayout title="Dev Blog">
        {post ? <BlogPost post={post} /> : <p>Post not found.</p>}
      </PageLayout>
    </Suspense>
  );
};

export default DeveloperBlog;