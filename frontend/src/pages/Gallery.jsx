import React from 'react'
import FoodGallery from '../components/FoodGallery'; // Importing the Gallery component

export default function Gallery() {
  return (
    <div style={{ padding: '40px 10px 10px 10px', backgroundColor: 'rgba(255, 255, 255, 1)' }}>
      <h1 style={{textAlign: 'center', color: '#023e8a', marginBottom: '10px'}}>Food Gallery</h1>
      <h2 style={{textAlign: 'center', color: '#0077b6', marginBottom: '20px'}}>Explore amazing foods</h2>
      <FoodGallery />
    </div>
  )
}
