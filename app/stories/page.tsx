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

  useEffect(() => {
    fetch("/thoughts.json")
      .then((res) => res.json())
      .then((data) => {
        data.content = DOMPurify.sanitize(data.content);
        setPosts(data)
      });
  }, []);


  // Split the posts into chunks of three
  const chunkSize = Math.ceil(posts.length / 3);
  const chunks: Post[][] = posts.reduce((acc: Post[][], _, i: number) => {
    if (i % chunkSize === 0) acc.push(posts.slice(i, i + chunkSize));
    return acc;
  }, []);

  // Map over the chunks and wrap each chunk in a div
  const renderedPosts = chunks.map((chunk, index) => (
    <div className="w-[30%] mx-auto" key={index}>
      {chunk.map(post => (
        <div className="card w-[100%] bg-base-100 shadow-xl my-4" key={post.id}>
          <div className="card-body">
            <h2 className="card-title underline">{post.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: post.content }} />
            <div className="text-xs italic hover:not-italic text-right">{post.date}</div>
          </div>
        </div>
      ))}
    </div>
  ));

  return (
    <div className='gap-4 md:flex md:flex-wrap'>
      {renderedPosts}
    </div>
  )
}

export default Thoughts