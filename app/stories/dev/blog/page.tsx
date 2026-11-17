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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 10000000);
    setLoading(true);
    setError(null);
    fetch(`https://gist.githubusercontent.com/rajanbajaj/6b604317cf35127a835e8a157d28588d/raw/devBlogs.json?i=${randomNumber}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Could not load post (${res.status}).`);
        }
        return res.json();
      })
      .then((data) => {
        const list: Post[] = Array.isArray(data) ? data : [];
        const sanitizedData = list.map((post: Post) => ({
          ...post,
          body: DOMPurify.sanitize(post.body ?? ""),
        }));

        const postId = searchParams.get("postId");
        if (postId) {
          const selectedPost = sanitizedData.find((post: Post) => post.id === postId);
          setPost(selectedPost);
        }
      })
      .catch(() => {
        setError("This post could not be loaded. Check your connection and try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchParams]);

  return (
    <Suspense fallback={<Loading />}>
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="alert alert-error" role="alert">
          <span>{error}</span>
          <button className="btn btn-sm" onClick={() => window.location.reload()}>
            Try again
          </button>
        </div>
      ) : post ? (
        <PageLayout title={post?.title}>
          <BlogPost post={post} />
        </PageLayout>
      ) : (
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Post not found</h2>
            <p className="text-base-content/70">The requested dev post does not exist or was removed.</p>
          </div>
        </div>
      )}
    </Suspense>
  );
};

export default DeveloperBlog;
