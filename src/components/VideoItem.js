import React from 'react'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} style={{cursor: "pointer"}} className="pb-3">
        <img src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
        <p>{video.snippet.title}</p>
    </div>
  )
}

export default VideoItem