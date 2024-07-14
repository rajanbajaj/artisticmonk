import React from "react"
import PageLayout from "../../layouts/PageLayout"
import ArtTile from "@/app/components/ArtTile/ArtTile"

const Art = () => {
  return (
    <PageLayout title="Art">
      <div className='gap-5 sm:flex sm:flex-1'>
        <ArtTile alt='rb' path={"/assets/RB.svg"} caption='Logo RB' title='RB Logo'/>
        <ArtTile alt='pixel-art' path={"/assets/pixel-art.svg"} caption='Pixel art' title='Pixel Art of Self'/>
        <ArtTile alt='crying-eye' path={"/assets/crying-eye.jpg"} caption='Pencil sketch of a crying eye!' title='Crying Eye'/>
        <ArtTile alt='lighthouse' path={"/assets/lighthouse.jpg"} caption='A play of acrylic paints' title='The Lighthouse'/>
      </div>
    </PageLayout>
  )
}

export default Art