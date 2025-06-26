import React from 'react'
import FoodGallery from '../components/FoodGallery'; // Importing the Gallery component

export default function Gallery() {
  return (
    <div>
      <h1 style={{textAlign: 'center', color: '#023e8a'}}>Food Gallery</h1>
      <h2 style={{textAlign: 'center', color: '#0077b6'}}>Explore amazing foods</h2>
      <FoodGallery />
    </div>
  )
}
