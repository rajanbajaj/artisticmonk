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
    figure = <figure className="w-[100%]"><img src={props.img.src} alt={props.img.alt} /></figure>
  } 

  if (props.action) {
    actionButton = <div className="card-actions md:justify-end"><Link className="btn btn-primary" href={props.action.link}>{props.action.text}</Link></div>
  }
  return (
    <div className="card w-[100%] bg-base-100 shadow-xl my-4">
      {figure}
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="hidden md:block">{props.caption}</p>
        {actionButton}
      </div>
    </div>
  )
}

export default Card