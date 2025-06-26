import React from 'react'
import VideoGallery from '../components/VideoGallery';

export default function Gallery() {
  return (
    <div>
      <h1 style={{textAlign: 'center', color: '#023e8a'}}>Cooking Classes</h1>
      <h2 style={{textAlign: 'center', color: '#0077b6'}}>Explore amazing cooking experiences</h2>
      <VideoGallery />
    </div>
  )
}