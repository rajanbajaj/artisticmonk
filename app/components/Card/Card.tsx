import Image from "next/image";
import Link from "next/link";
import React from "react"

const Card = (props: {
  title: string, 
  caption?: string, 
  img?: {src: string, alt: string}, 
  action?: {link: string, text: string}
}) => {
  let figure: React.ReactNode = "";
  let actionButton: React.ReactNode = "";
  if (props.img?.src) {
    figure = <figure className="w-full overflow-hidden"><Image src={props.img.src} alt={props.img.alt} width={800} height={450} sizes="(max-width: 768px) 100vw, 800px" className="h-auto w-full" /></figure>
  }

  if (props.action) {
    actionButton = <div className="card-actions justify-end"><Link className="btn btn-primary" href={props.action.link}>{props.action.text}</Link></div>
  }
  return (
    <div className="card w-full bg-base-100 shadow-xl my-4">
      {figure}
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        {props.caption ? <p>{props.caption}</p> : null}
        {actionButton}
      </div>
    </div>
  )
}

export default Card