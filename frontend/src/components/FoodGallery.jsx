import React, { useState } from 'react';
import '../styles/FoodGallery.css';
import CloseIcon from '@mui/icons-material/Close';

import Img01 from '../assets/img/Food01.jpg';
import Img02 from '../assets/img/Food02.jpg';
import Img03 from '../assets/img/Food03.jpg';
import Img04 from '../assets/img/Food04.jpg';
import Img05 from '../assets/img/Food05.jpg';
import Img06 from '../assets/img/Food06.jpg';
import Img07 from '../assets/img/Food07.jpg';
import Img08 from '../assets/img/Food08.jpg';
import Img09 from '../assets/img/Food09.jpg';
import Img10 from '../assets/img/Food10.jpg';

export default function FoodGallery() {

    let data = [
        {
            id: 1,
            imgSrc: Img01,
        },
        {
            id: 2,
            imgSrc: Img02,
        },
        {
            id: 3,
            imgSrc: Img03,
        },
        {
            id: 4,
            imgSrc: Img04,
        },
        {
            id: 5,
            imgSrc: Img05,
        },
        {
            id: 6,
            imgSrc: Img06,
        },
        {
            id: 7,
            imgSrc: Img07,
        },
        {
            id: 8,
            imgSrc: Img08,
        },
        {
            id: 9,
            imgSrc: Img09,
        },
        {
            id: 10,
            imgSrc: Img10,
        },
    ]

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <>
            <div className={model? "model open" : "model"}>
                <img src={tempImgSrc} />
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <div className='gallery'>
                {data.map((item, index) => {
                    return (
                        <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{width: '100%'}} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
