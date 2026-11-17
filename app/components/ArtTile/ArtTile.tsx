import Image from "next/image"
import React from "react"

interface ArtProps {
    alt: string;
    path: string;
    caption: string;
    title: string;
}

const ArtTile = (props: ArtProps) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl sm:max-w-xs">
      <figure className="m-2 overflow-hidden rounded-lg">
        <Image src={props.path} alt={props.alt} width={600} height={600} sizes="(max-width: 640px) 100vw, 320px" className="h-auto w-full" />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="mt-2">{props.caption}</p>
      </div>
    </div>
  )
}

export default ArtTile