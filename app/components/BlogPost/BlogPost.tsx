import { Post } from "@/app/models/types/Post"
import React from "react"
import DOMPurify from "isomorphic-dompurify";

const BlogPost = (props: {post: Post | undefined}) => {
  if (!props.post) {
    return (
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Post not found</h2>
          <p className="text-base-content/70">The requested post does not exist or was removed.</p>
        </div>
      </div>
    )
  }
  
  const sanitizedHTML = DOMPurify.sanitize(props.post.body);
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
    </div>
  )
}

export default BlogPost