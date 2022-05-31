import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video) => {
     return (
      <VideoItem 
        onVideoSelect={onVideoSelect}
        key={video.id.videoId}
        video={video}
      />
     )
  })

  return (
    <div className='mt-4 mb-4'>
      {listOfVideos}
    </div>
  )
}

export default VideoList