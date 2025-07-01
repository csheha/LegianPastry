import React, { useEffect, useState } from 'react'
import spinner from '../assets/img/Sp.svg';

export default function SpinnerLoader() {

    const [text, setText] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setText(
                'I waited for 3 seconds ro be loaded, did you see the spinner?'
            )
        }, 3000)
    }, []);

  return (
    <div>
        {
            loading ? (
                <img src={spinner} />
            ) : (
                <h3>{text}</h3>
            )
        }
    </div>
  )
}
