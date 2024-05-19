import React from "react"
import PageLayout from "../../layouts/PageLayout"
import { Post } from "../../models/types/Post";
import { postModel } from "../../models/Post";
import Card from "../../components/Card/Card";

const Developer = () => {
  const posts: Post[] = postModel.getPosts();
  return (
    <PageLayout title="Dev Blog">
      <div className='gap-4 md:flex'>
        { posts.map((post) => (
          <Card title={post.title} caption={post.summary} img={post.coverImage} action={{link: `/dev/blog?postId=${post.id}`, text: "Read Now"}} key={post.id}/>
        ) 
        )}
      </div>
    </PageLayout>
  )
}

export default Developer