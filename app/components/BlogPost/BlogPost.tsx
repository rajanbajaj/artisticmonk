import { Post } from "@/app/models/types/Post"
import React from "react"
import DOMPurify from "isomorphic-dompurify";

const BlogPost = (props: {post: Post | undefined}) => {
  if (!props.post) {
    return <div>Not Found</div>
  }
  
  const sanitizedHTML = DOMPurify.sanitize(props.post.body);
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
    </div>
  )
}

export default BlogPost