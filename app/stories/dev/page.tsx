"use client"
import React, { useEffect, useState } from "react"
import PageLayout from "../../layouts/PageLayout"
import { Post } from "../../models/types/Post";
import Card from "../../components/Card/Card";
import DOMPurify from "isomorphic-dompurify";

const Developer = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 10000000);
    setLoading(true);
    setError(null);
    fetch(`https://gist.githubusercontent.com/rajanbajaj/6b604317cf35127a835e8a157d28588d/raw/devBlogs.json?i=${randomNumber}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Could not load posts (${res.status}).`);
        }
        return res.json();
      })
      .then((data) => {
        const list: Post[] = Array.isArray(data) ? data : [];
        setPosts(
          list.map((post) => ({
            ...post,
            body: DOMPurify.sanitize(post.body ?? ""),
            summary: DOMPurify.sanitize(post.summary ?? ""),
          }))
        );
      })
      .catch(() => {
        setError("Dev posts could not be loaded. Check your connection and try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <PageLayout title="Dev Blog">
      {loading ? (
        <div className="grid grid-cols-1 gap-4" aria-busy="true" aria-label="Loading dev posts">
          {[0, 1, 2].map((i) => (
            <div className="card w-full bg-base-100 shadow-xl" key={i}>
              <div className="card-body gap-3">
                <div className="skeleton h-6 w-1/2"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="alert alert-error" role="alert">
          <span>{error}</span>
          <button className="btn btn-sm" onClick={() => window.location.reload()}>
            Try again
          </button>
        </div>
      ) : posts.length === 0 ? (
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">No dev posts yet</h2>
            <p className="text-base-content/70">New engineering posts will appear here once published.</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          { posts.map((post) => (
            <Card title={post.title} caption={post.summary} img={post.coverImage} action={{link: `/stories/dev/blog?postId=${post.id}`, text: "Read Now"}} key={post.id}/>
          )
          )}
        </div>
      )}
    </PageLayout>
  )
}

export default Developer
