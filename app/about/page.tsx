import React from 'react'
import Layout from '../layouts/Layout'

const AboutPage = () => {
  return (
    <Layout title="About">
      <div className="py-8 px-4 sm:px-6 lg:px-8 flex flex-row-reverse gap-5">
        <div className="prose prose-lg text-gray-500 mx-auto">
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            scelerisque semper neque, et maximus ex varius in. In non velit
            feugiat, vestibulum sapien nec, accumsan sapien.
          </p>
          <p>
            Fusce pulvinar tempor arcu at convallis. Nullam porttitor
            fermentum ultricies. Morbi malesuada dui at metus dignissim
            viverra.
          </p>
          <p>
            Donec elementum mi sit amet risus eleifend, at scelerisque libero
            volutpat. Aliquam malesuada fringilla sapien, sit amet fermentum
            justo congue id. Aenean euismod, justo eu varius tempor, metus
            tortor feugiat felis, nec vehicula eros purus et tortor.
          </p>
        </div>
        <img src="https://avatars.githubusercontent.com/u/24255458?v=4" alt="My Image" className="rounded-full w-32 h-32 mx-auto mb-8" />
      </div>
    </Layout>
  )
}

export default AboutPage