import React, { useEffect, useState } from 'react';
import '../styles/FoodGallery.css';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import SpinnerLoader from './SpinnerLoader';


export default function FoodGallery() {
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Function to fetch the image
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await axios.get('http://localhost:5000/images/');
                if (Array.isArray(res.data)) {
                    setImages(res.data);
                } else {
                    throw new Error('Invalid response format');
                }
            } catch (error) {
                console.error('Error fetching images:', error);
                setError('Failed to load images.');
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    const getImg = (img) => {
        // Normalize filepath by replacing backslashes with forward slashes
        const cleanedPath = img.filepath.replace(/\\/g, '/');
        setTempImgSrc('http://localhost:5000/' + cleanedPath);
        setModel(true);
    }

    return (
        <>
            <div className={model? "model open" : "model"}>
                <img src={tempImgSrc} />
                <CloseIcon onClick={() => setModel(false)} />
            </div>

            {loading && 
                <div className="loading">
                    <SpinnerLoader />
                </div>
            }
            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            <div className='gallery'>
                {images.length > 0 && !loading && !error && (
                    images.map((item, index) => {
                    return (
                        <div className='pics' key={index} onClick={() => getImg(item)}>
                            <img 
                                src={`http://localhost:5000/${item.filepath.replace(/\\/g, '/')}`}
                                alt={item.title}
                                style={{width: '100%'}}
                            />
                        </div>
                    )
                }))}
            </div>
        </>
    )
}
