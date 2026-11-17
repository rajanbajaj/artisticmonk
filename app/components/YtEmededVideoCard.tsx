"use client";
import React from "react";

interface YtEmededVideoCardProps {
  width?: string;
  height?: string;
  src?: string;
  title?: string;
  description?: string;
  style?: React.CSSProperties;
}

export default function YtEmededVideoCard({ width, height, src, title, description, style }: YtEmededVideoCardProps) {
  return (
    <div className="card w-full bg-base-100">
      {(title || description) && (
        <div className="card-body">
          {title && <h3 className="card-title">{title}</h3>}
          {description && <p className="text-sm text-base-content/70">{description}</p>}
        </div>
      )}
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          width={width || "560"}
          height={height || "315"}
          src={src || "https://www.youtube.com/embed/_mwPVazyyO4?si=vFctZSOpWYBYaztx"}
          title={title || "YouTube video player"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
          style={style || { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
        ></iframe>
      </div>
    </div>
  );
}
