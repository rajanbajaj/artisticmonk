import BlogPost from "@/app/components/BlogPost/BlogPost"
import PageLayout from "@/app/layouts/PageLayout"
import { postModel } from "@/app/models/Post"
import { Post } from "@/app/models/types/Post"
import React from "react"

const DeveloperBlog = () => {
  const post: Post = postModel.first();
  return (
    <PageLayout title="Dev Blog">
      <BlogPost post={post} />
    </PageLayout>
  )
}

export default DeveloperBlog