import React from 'react'
import '../styles/Gallery.css';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import img01 from '../assets/Gallery01.jpg';
import img02 from '../assets/Gallery02.jpg';
import img03 from '../assets/Gallery03.jpg';
import img04 from '../assets/Gallery04.jpg';
import img05 from '../assets/Gallery05.jpg';
import img06 from '../assets/Gallery06.jpg';
import { useNavigate } from 'react-router-dom';

export default function Gallery() {
    
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/gallery');
  };

  return (
    <div id='gallery' className="gallery-section">

      <div className="gallery-container">
        <div className="gallery-title">
            <h2>Gallery</h2>
        </div>
        <div className="gallery-wrapper">
            <div className="gallery-grid">
                <div className="gallery-card">
                    <img src={img01} alt="Gallery Image 1" className='image-one' />
                    <img src={img03} alt="Gallery Image 3" className='image-three' />
                </div>
                <div className="gallery-card">
                    <img src={img02} alt="Gallery Image 2" className='image-two' />
                    <img src={img04} alt="Gallery Image 4" className='image-four' />
                </div>
                <div className="gallery-card">
                    <img src={img06} alt="Gallery Image 6" className='image-six' />
                    <img src={img05} alt="Gallery Image 5" className='image-five' />
                </div>
            </div>
            <div className="gallery-text">
                <div className="text-one">
                    <span>Food</span>
                </div>
                <div className="text-two">
                    <span>Good</span>
                </div>
            </div>
        </div>
        <div className="arrow-container">
            <ArrowCircleRightIcon className='arrow-icon' onClick={handleClick} />
        </div>
      </div>
    </div>
  )
}
