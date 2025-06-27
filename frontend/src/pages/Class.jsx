import React from 'react'
import VideoGallery from '../components/VideoGallery';

export default function Gallery() {
  return (
    <div>
      <h1 style={{textAlign: 'center', color: '#2d6a4f'}}>Cooking Classes</h1>
      <h2 style={{textAlign: 'center', color: '#40916c'}}>Explore amazing cooking experiences</h2>
      <VideoGallery />
    </div>
  )
}