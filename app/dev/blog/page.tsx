"use client"
import BlogPost from "@/app/components/BlogPost/BlogPost"
import PageLayout from "@/app/layouts/PageLayout"
import { postModel } from "@/app/models/Post"
import { Post } from "@/app/models/types/Post"
import React from "react"
import { useSearchParams } from "next/navigation"; // Import useNavigation for client-side navigation

const DeveloperBlog = () => {
  const searchParams = useSearchParams()
  const postId = searchParams.get("postId")

  // Fetch the post based on postId
  const post: Post | undefined = postModel.getPostById(postId);

  return (
    <PageLayout title="Dev Blog">
      <BlogPost post={post} />
    </PageLayout>
  )
}

export default DeveloperBlog