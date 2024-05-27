"use client"
import React, { useEffect, useState } from "react"
import PageLayout from "../../layouts/PageLayout"
import { Post } from "../../models/types/Post";
import Card from "../../components/Card/Card";
import DOMPurify from "isomorphic-dompurify";

const Developer = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/rajanbajaj/6b604317cf35127a835e8a157d28588d/raw/772d5b7efd8903057ce153f8c91e53a063d485ae/devBlogs.json")
      .then((res) => res.json())
      .then((data) => {
        data.body = DOMPurify.sanitize(data.body);
        setPosts(data)
      }).catch(err => console.log(err));
  }, []);

  return (
    <PageLayout title="Dev Blog">
      <div className='gap-4 md:flex'>
        { posts.map((post) => (
          <Card title={post.title} caption={post.summary} img={post.coverImage} action={{link: `/stories/dev/blog?postId=${post.id}`, text: "Read Now"}} key={post.id}/>
        ) 
        )}
      </div>
    </PageLayout>
  )
}

export default Developer