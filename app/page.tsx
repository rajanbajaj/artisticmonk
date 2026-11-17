"use client"
import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import DropdownMenu from "./components/Menu/DropdownMenu";
import ThemeButton from "./components/NavBar/ThemeButton";
import Animated from "./components/Animated/Animated";

const Home: NextPage = () => {
  const disableRightClick = (event: React.MouseEvent) => {
    event.preventDefault();
  };
  const imageClass = "mt-2 transition-transform duration-200 motion-safe:hover:scale-[1.02] motion-reduce:transform-none";
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="py-4">
        <div className="container mx-auto flex justify-between items-center">
          <DropdownMenu />
          <Animated>
            <ThemeButton />
          </Animated>
          <nav>
            <ul className="flex">
              <li className="mx-4 hidden md:block"><a href="#about">About</a></li>
              <li className="mx-4 hidden md:block"><a href="#portfolio">Portfolio</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg">Discover the beauty of art through my creations.</p>
          <div className="content-center mx-auto mt-8 overflow-hidden rounded-lg shadow-lg">
            <Image src="/assets/lighthouse.jpg" alt="Acrylic painting of a lighthouse" width={1500} height={720} priority sizes="(max-width: 768px) 100vw, 768px" className="h-auto w-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="flex flex-col gap-6 md:flex-row md:gap-10">
            <div className="w-full md:w-1/2">
              <Image alt="Profile picture of Rajan Bajaj" src="https://avatars.githubusercontent.com/u/24255458?v=4" width={600} height={600} className="h-auto w-full rounded-lg"></Image>
            </div>
            <p className="max-w-prose text-lg mb-6">
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
          <div className="grid grid-cols-1 gap-4 px-1 sm:grid-cols-2 lg:grid-cols-3" onContextMenu={disableRightClick}>
            {/* Portfolio Items */}
            <Image src="/assets/shiva.png" alt="Digital illustration of Shiva" width={640} height={640} className={imageClass} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            <Image src="/assets/crying-eye.jpg" alt="Pencil sketch of a crying eye" width={640} height={640} className={imageClass} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            <Image src="/assets/art/bachpan.jpeg" alt="Childhood memory sketch" width={640} height={640} className={imageClass} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            <Image src="/assets/art/sketch-room.jpeg" alt="Sketch of a room interior" width={640} height={640} className={imageClass} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            <Image src="/assets/art/doodle1.jpeg" alt="Doodle illustration" width={640} height={640} className={imageClass} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            <Image src="/assets/lighthouse.jpg" alt="Acrylic painting of a lighthouse" width={640} height={640} className={imageClass} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            <Image src="/assets/art/dream.jpeg" alt="Dream-like surreal illustration" width={640} height={640} className={imageClass} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            <Image src="/assets/art/masurao.jpeg" alt="Portrait illustration" width={640} height={640} className={imageClass} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            <Image src="/assets/art/Shiva.jpeg" alt="Sketch of Shiva" width={640} height={640} className={imageClass} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            <Image src="/assets/art/sketch-portraits.jpeg" alt="Sheet of portrait sketches" width={640} height={640} className={imageClass} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
          </div>
        </div>
      </section>


      {/* Footer Section */}
      <footer className="bg-base-200 text-base-content py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Artistic Monk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;