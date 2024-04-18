import React from 'react'
import Layout from '../layouts/Layout'

const AboutPage = () => {
  return (
    <Layout title="About Me">
      <div className="py-8 px-4 sm:px-6 lg:px-8 flex flex-row-reverse gap-5">
        <div className="prose prose-lg text-gray-500 mx-auto">
          <p>
            Hello there! I'm a passionate software developer with a knack for solving complex
            problems and leading DevOps teams. When I'm not busy creating standard operating
            procedures or diving into code, you can find me indulging in my many hobbies.
          </p>
          <br />
          <p>
            As an artist at heart, I love to express my creativity through sketching and
            digital illustrations. I find that these activities help me unwind and recharge
            after a long day of work. I'm also an avid reader, always on the lookout for
            new and exciting stories to dive into.
          </p>
          <br />
          <p>
            When I'm not creating art or reading, I enjoy hitting the open road on my bike and
            embarking on thrilling road trips. There's nothing quite like the feeling of the
            wind in my hair and the open road ahead.
          </p>
          <br />
          <p>
            In my downtime, I love to cook up delicious meals when I'm home alone. There's
            something therapeutic about chopping vegetables and experimenting with new recipes.
            And when I'm not cooking, I'm usually curled up on the couch watching my favorite
            anime or K-dramas, or catching up on the latest thriller series.
          </p>
          <br />
          <p>
            But my love for learning doesn't stop at entertainment. I'm also teaching myself
            to play the guitar, and I'm always looking for new skills to add to my repertoire.
          </p>
          <br />
          <p>
            Overall, I'm a passionate and curious individual who loves to learn and create.
            Whether I'm solving complex problems at work or exploring new hobbies, I'm always
            looking for new and exciting challenges to take on.
          </p>
        </div>
        <img src="https://avatars.githubusercontent.com/u/24255458?v=4" alt="My Image" className="rounded-full w-32 h-32 mx-auto mb-8" />
      </div>
    </Layout>
  )
}

export default AboutPage