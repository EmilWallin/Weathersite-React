import react from 'react';

import './sunRay.css';


export const SunRay = ({offset}) => {

    return (
        <div className="SunRayDiv">
            <div className="SunRay" style={{animationDelay: `${offset.delay}s`}}></div>
        </div>
    )
}

export default SunRay;