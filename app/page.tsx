"use client"
import { NextPage } from "next";
import Image from "next/image";
import React from "react";

const Home: NextPage = () => {
  const imageClass = "mt-2 hover:transform hover:transition-transform hover:duration-100 hover:scale-125";
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Artistic Monk</div>
          <nav>
            <ul className="flex">
              <li className="mx-4"><a href="#about">About</a></li>
              <li className="mx-4"><a href="#portfolio">Portfolio</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg">Discover the beauty of art through my creations.</p>
          <div className="content-center mx-auto mt-8 rounded-lg shadow-lg">
            <Image src="/assets/lighthouse.jpg" alt="Artwork" width={1500} height={720}/>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="flex gap-10">
            <div className="w-[50%]">
              <Image alt="Profile Picture" src="https://avatars.githubusercontent.com/u/24255458?v=4" width={600} height={600}></Image>
            </div>
            <p className="text-lg mb-6">
              Hi, my name is Rajan Bajaj a.k.a Artisitic Monk.
              As an artist at heart, I love to express my creativity through sketching and
              digital illustrations. I find that these activities help me unwind and recharge
              after a long day of work. I&apos;m also an avid reader, always on the lookout for
              new and exciting stories to dive into.
              When I&lsquo;m not creating art or reading, I enjoy hitting the open road on my bike and embarking on thrilling road trips. There&lsquo;s nothing quite like the feeling of the wind in my hair and the open road ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
          {/* Portfolio Grid */}
          <div className="flex flex-wrap px-1">
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"> */}
            {/* Portfolio Items */}
            <div className="w-1/3 px-1">
              <Image src="/assets/shiva.png" alt="Artwork 3" width={640} height={640} className={imageClass}/>
              <Image src="/assets/crying-eye.jpg" alt="Artwork 1" width={640} height={640} className={imageClass}/>
              <Image src="/assets/art/bachpan.jpeg" alt="Artwork 1" width={640} height={640} className={imageClass}/>
              <Image src="/assets/art/sketch-room.jpeg" alt="Artwork 3" width={640} height={640} className={imageClass}/>
            </div>
            <div className="w-1/3 px-1">
              <Image src="/assets/art/doodle1.jpeg" alt="Artwork 1" width={640} height={640} className={imageClass}/>
              <Image src="/assets/lighthouse.jpg" alt="Artwork 2" width={640} height={640} className={imageClass}/>
              <Image src="/assets/art/dream.jpeg" alt="Artwork 2" width={640} height={640} className={imageClass}/>
            </div>
            <div className="w-1/3 px-1">
              <Image src="/assets/art/masurao.jpeg" alt="Artwork 2" width={640} height={640} className={imageClass}/>
              <Image src="/assets/art/Shiva.jpeg" alt="Artwork 3" width={640} height={640} className={imageClass}/>
              <Image src="/assets/art/sketch-portraits.jpeg" alt="Artwork 2" width={640} height={640} className={imageClass}/>
            </div>
          </div>
        </div>
      </section>


      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Artistic Monk. All rights reserved.</p>
        </div>
      </footer>
    </div>

  );
}

export default Home;