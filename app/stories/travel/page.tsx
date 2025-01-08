"use client"

import YtEmededVideoCard from "@/app/components/YtEmededVideoCard"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import DOMPurify from "isomorphic-dompurify";
import React, { useEffect, useState } from "react"

const Travel = () => {
  interface Video {
    src: string;
    title: string;
    description: string;
  }

  const [videos, setVideos] = React.useState<Video[]>([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<unknown>(null)
  const [width, setWidth] = useState(786);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 10000000);
    const fetchVideos = async () => {
      setLoading(true)
      try {
        fetch(`https://gist.githubusercontent.com/rajanbajaj/37fd72b0c8be11078ddab9455ea46e1f/raw/youtube-bike.json?i=${randomNumber}`)
        .then((res) => res.json())
        .then((data) => {
          data.content = DOMPurify.sanitize(data.content);
          setVideos(data)
        });
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchVideos()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {String(error)}</div>
  }

  // Split the videos into chunks of three
  const chunkSize = Math.ceil(videos.length / 2);
  const chunks: Video[][] = width >= 768? videos.reduce((acc: Video[][], _, i: number) => {
    if (i % chunkSize === 0) acc.push(videos.slice(i, i + chunkSize));
    return acc;
  }, []) : [videos];

  // Map over the chunks and wrap each chunk in a div
  const renderedVideos = chunks.map((chunk, index) => (
    <div className="md:w-[45%] mx-auto" key={index}>
      {chunk.map((video, index) => (
        <div className="card w-[100%] bg-base-100 shadow-xl my-4" key={index}>
          <div className="card-body">
            <YtEmededVideoCard src={video.src} title={video.title} description={video.description} />
          </div>
        </div>
      ))}
    </div>
  ));

  return (
    <div className="container">
      <div className='gap-4 md:flex md:flex-wrap'>
        {renderedVideos}
      </div>
    </div>
  )
}

export default Travel