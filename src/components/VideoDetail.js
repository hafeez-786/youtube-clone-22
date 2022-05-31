import React from 'react'

const VideoDetail = ({video: { id: { videoId }, snippet: { title, channelTitle, description }}} ) => {

  if(!videoId) return <div>Loading...</div>

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <>
      <div>
        <iframe 
          frameBorder="0"
          height="400"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </div>

      <div>
        <h5>{title} - {channelTitle}</h5>
      </div>
      
      <div>
        <p>{description}</p>
      </div>

    </>
  )
}

export default VideoDetail