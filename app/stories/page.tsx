"use client"
import DOMPurify from "isomorphic-dompurify";
import React, { useEffect, useState } from "react"

interface Post {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
}

const Thoughts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 10000000);
    setLoading(true);
    setError(null);
    fetch(`https://gist.githubusercontent.com/rajanbajaj/1e318d0a171755e863e065cdb21c3ef9/raw/thoughts.json?i=${randomNumber}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Could not load thoughts (${res.status}).`);
        }
        return res.json();
      })
      .then((data) => {
        const list: Post[] = Array.isArray(data) ? data : [];
        setPosts(
          list.map((post) => ({
            ...post,
            content: DOMPurify.sanitize(post.content ?? ""),
          }))
        );
      })
      .catch(() => {
        setError("Thoughts could not be loaded. Check your connection and try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3" aria-busy="true" aria-label="Loading thoughts">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div className="card w-full bg-base-100 shadow-xl" key={i}>
            <div className="card-body gap-3">
              <div className="skeleton h-6 w-2/3"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-1/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error" role="alert">
        <span>{error}</span>
        <button className="btn btn-sm" onClick={() => window.location.reload()}>
          Try again
        </button>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">No thoughts yet</h2>
          <p className="text-base-content/70">New short-form posts will appear here once published.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div className="card w-full bg-base-100 shadow-xl" key={post.id}>
          <div className="card-body">
            <h2 className="card-title underline">{post.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: post.content }} />
            <div className="text-right text-xs italic">{post.date}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Thoughts
