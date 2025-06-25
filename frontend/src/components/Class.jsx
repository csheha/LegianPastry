import React from 'react'
import '../styles/Class.css';

import video01 from '../assets/videos/Food01.mp4';
import video02 from '../assets/videos/Food02.mp4';
import video03 from '../assets/videos/Food03.mp4';
import video04 from '../assets/videos/Food04.mp4';

const videos = [
    {
        id: 1,
        food: "Fried Chicken Sandwich with Meatballs",
        chef: "Chef Bayashi Jenkins",
        videoUrl: video01
    },
    {
        id: 2,
        food: "Coconut Curry Rice and Grilled Chicken",
        chef: "Chef Dineshi Perera",
        videoUrl: video02
    },
    {
        id: 3,
        food: "Chole Paneer Masala",
        chef: "Chef Anjal Sharma",
        videoUrl: video03
    },
    {
        id: 4,
        food: "Creamy Japanese Tamago Sando",
        chef: "Chef Yuki Nakamura",
        videoUrl: video04
    }
];

export default function Class() {
  return (
    <div id='class' className='class-section'>
      <div className="class-container">
        <h1 className='class-text'>Classes</h1>
        <div className="class-header">
            <div className="header-text">
                <h1>Explore amazing classes from our chefs around the world!</h1>
            </div>
            <div className="button">
                <button className="class-btn">
                    <span>Explore Classes</span>
                </button>
            </div>  
        </div>
        <div className="class-content">
            <div className="video-wrapper">
                {videos.map((video) => ( 
                    <div key={video.id} className="video-card"> 
                        <video
                        src={video.videoUrl}
                        controls
                        className="video-player"
                        />
                        <h3 className="food-name">{video.food}</h3>
                        <p className="chef-name">{video.chef}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}
