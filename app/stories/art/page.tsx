import React from "react"
import PageLayout from "../../layouts/PageLayout"
import ArtTile from "@/app/components/ArtTile/ArtTile"

const Art = () => {
  return (
    <PageLayout title="Art">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <ArtTile alt="RB monogram logo" path={"/assets/RB.svg"} caption="Logo RB" title="RB Logo"/>
        <ArtTile alt="Pixel art portrait" path={"/assets/pixel-art.svg"} caption="Pixel art" title="Pixel Art of Self"/>
        <ArtTile alt="Pencil sketch of a crying eye" path={"/assets/crying-eye.jpg"} caption="Pencil sketch of a crying eye!" title="Crying Eye"/>
        <ArtTile alt="Acrylic painting of a lighthouse" path={"/assets/lighthouse.jpg"} caption="A play of acrylic paints" title="The Lighthouse"/>
      </div>
    </PageLayout>
  )
}

export default Art