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
    <div className="card w-600 bg-base-100 shadow-xl m-2 sm:w-60">
        <figure className="m-2 w-50 h-50 overflow-hidden">
          <img src={props.path} alt={props.alt} className="w-full h-full" />
        </figure>
        <div className="card-body">
          <div className="card-title">{props.title}</div>
          <p>{props.caption}</p>
        </div>
    </div>
  )
}

export default ArtTile