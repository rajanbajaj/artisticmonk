"use client"

import YtEmededVideoCard from "@/app/components/YtEmededVideoCard"
import React, { useEffect, useState } from "react"

const Travel = () => {
  interface Video {
    src: string;
    title: string;
    description: string;
  }

  const [videos, setVideos] = React.useState<Video[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 10000000);
    const fetchVideos = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`https://gist.githubusercontent.com/rajanbajaj/37fd72b0c8be11078ddab945e46e1f/raw/youtube-bike.json?i=${randomNumber}`)
        if (!res.ok) {
          throw new Error(`Could not load travel videos (${res.status}).`);
        }
        const data = await res.json()
        setVideos(Array.isArray(data) ? data : [])
      } catch {
        setError("Travel videos could not be loaded. Check your connection and try again.")
      } finally {
        setLoading(false)
      }
    }
    fetchVideos()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2" aria-busy="true" aria-label="Loading travel videos">
        {[0, 1, 2, 3].map((i) => (
          <div className="card w-full bg-base-100 shadow-xl" key={i}>
            <div className="card-body gap-3">
              <div className="skeleton h-6 w-2/3"></div>
              <div className="skeleton aspect-video w-full"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="alert alert-error" role="alert">
        <span>{error}</span>
        <button className="btn btn-sm" onClick={() => window.location.reload()}>
          Try again
        </button>
      </div>
    )
  }

  if (videos.length === 0) {
    return (
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">No travel videos yet</h2>
          <p className="text-base-content/70">New road-trip videos will appear here once published.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {videos.map((video, index) => (
          <div className="card w-full bg-base-100 shadow-xl" key={video.src || index}>
            <div className="card-body">
              <YtEmededVideoCard src={video.src} title={video.title} description={video.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Travel
