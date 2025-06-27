import React, { useState } from 'react';
import '../styles/VideoGallery.css';
import CloseIcon from '@mui/icons-material/Close';

import Video01 from '../assets/videos/Video01.mp4';
import Video02 from '../assets/videos/Video02.mp4';
import Video03 from '../assets/videos/Video03.mp4';
import Video04 from '../assets/videos/Video04.mp4';
import Video05 from '../assets/videos/Video05.mp4';
import Video06 from '../assets/videos/Video06.mp4';
import Video07 from '../assets/videos/Video07.mp4';
import Video08 from '../assets/videos/Video08.mp4';
import Video09 from '../assets/videos/Video09.mp4';
import Video10 from '../assets/videos/Video10.mp4';

export default function FoodGallery() {

    const foodVideos = [
        {
            id: 1,
            videoSrc: Video01,
            food: "Beef Patty Hamburger",
            chef: "Chef James"
        },
        {
            id: 2,
            videoSrc: Video02,
            food: "Purple Roll Cake with Blueberry",
            chef: "Chef Lily"
        },
        {
            id: 3,
            videoSrc: Video03,
            food: "European Bass Grilled Fish with Veggies",
            chef: "Chef Antonio"
        },
        {
            id: 4,
            videoSrc: Video04,
            food: "Fried Rice",
            chef: "Chef Mei"
        },
        {
            id: 5,
            videoSrc: Video05,
            food: "Vegan Creamy Roasted Pumpkin Soup",
            chef: "Chef Carla"
        },
        {
            id: 6,
            videoSrc: Video06,
            food: "Vegetable Paneer",
            chef: "Chef Arjun"
        },
        {
            id: 7,
            videoSrc: Video07,
            food: "Fruit Cake",
            chef: "Chef Rachel"
        },
        {
            id: 8,
            videoSrc: Video08,
            food: "Pancake",
            chef: "Chef Sam"
        },
        {
            id: 9,
            videoSrc: Video09,
            food: "Malaysian Local Rice Porridge",
            chef: "Chef Ahmad"
        },
        {
            id: 10,
            videoSrc: Video10,
            food: "Mushroom Curry",
            chef: "Chef Nisha"
        }
    ];

    const [model, setModel] = useState(false);
    const [tempVideoSrc, setTempVideoSrc] = useState('');

    const getVideo = (videoSrc) => {
        setTempVideoSrc(videoSrc);
        setModel(true);
    }

    return (
        <>
            <div className={model? "model open" : "model"}>
                <video src={tempVideoSrc} controls autoPlay />
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <div className='gallery'>
                {foodVideos.map((item, index) => {
                    return (
                        <div className='videos' key={item.id} onClick={() => getVideo(item.videoSrc)} title={item.food}>
                            <video src={item.videoSrc} controls style={{ width: '100%' }} />
                            <h4>{item.food}</h4>
                            <p>{item.chef}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}