import React, { useEffect } from 'react'
import '../styles/Class.css';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    const handleClick = () => {
        navigate('/class');
    }

  return (
    <div id='class' className='class-section'>
      <div className="class-container">
        <h1 
            className='class-text'
            data-aos="fade-down"
        >
            Classes
        </h1>
        <div 
            className="class-header"
            data-aos="fade-up"
        >
            <div className="header-text">
                <h1>Explore amazing classes from our chefs around the world!</h1>
            </div>
            <div className="button">
                <button className="class-btn" onClick={handleClick}>
                    <span>Explore Classes</span>
                </button>
            </div>  
        </div>
        <div className="class-content">
            <div 
                className="video-wrapper"
            >
                {videos.map((video, index) => ( 
                    <div 
                        key={video.id} 
                        className="video-card"
                        data-aos="zoom-in"
                        data-aos-delay={index * 200} // Stagger animations
                    > 
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
