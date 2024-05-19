import React from "react"

const Thoughts = () => {
  const posts: any = [
    { 
      id: "id-1",
      title: "Live every single moment to the best of your abilitites.",
      author: "Rajan",
      date: "2024-05-19",
      content: "As time passes you realise that life is not permanent, that your body is just a shell of sand and your mind and ideas are the accumulation of experiences, creativity, and knowledge majorly influenced by the society. But the light that makes you aware of this is your iinner wisdom that you need to tap into to experience your life to the fullest. Live every single moment to the best of your abilities. And let this movie of life unfold as we age."
    },
    {
      id: "id-2",
      title: "Making peace with yourself.",
      author: "Rajan",
      date: "2023-01-07",
      content: "Your body and mind naturally know it when you make peace with yourself. It is about acceptance of self which comes naturally and cannot be forced. You are not broken. You are just fighting your self to accept who you are. Let it flow naturally and it's yours."
    }
  ];
  return (
    <div className='gap-4 md:flex'>
      { 
        posts.map((post: any) => (
          <div className="card w-[100%] bg-base-100 shadow-xl my-4" key={post.id}>
            <div className="card-body">
              <h2 className="card-title underline">{post.title}</h2>
              <p>{post.content}</p>
              <div className='text-xs italic hover:not-italic text-right'>{post.date}</div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Thoughts