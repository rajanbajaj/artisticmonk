import Image from 'next/image'
import React from 'react'

interface ArtProps {
    alt: string;
    path: string;
    caption: string;
    title: string;
}

const ArtTile = (props: ArtProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={props.path} alt={props.alt} /></figure>
        <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p>{props.caption}</p>
            <div className="card-actions justify-end">
                {/* <button className="btn btn-primary"></button> */}
            </div>
        </div>
    </div>
  )
}

export default ArtTile