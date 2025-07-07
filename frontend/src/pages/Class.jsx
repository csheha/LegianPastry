import React from 'react'
import VideoGallery from '../components/VideoGallery';

export default function Gallery() {
  return (
    <div style={{ padding: '40px 10px 10px 10px', backgroundColor: 'rgba(255, 255, 255, 1)' }}>
      <h1 style={{textAlign: 'center', color: '#2d6a4f', marginBottom: '10px'}}>Cooking Classes</h1>
      <h2 style={{textAlign: 'center', color: '#40916c', marginBottom: '10px'}}>Explore amazing cooking experiences</h2>
      <VideoGallery />
    </div>
  )
}