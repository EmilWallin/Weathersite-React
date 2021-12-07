import React from 'react';
import "../SnowFlake/snowFlake.css";

const SnowFlake = ({offset}) => {
    return (
        <div style={{ marginLeft: offset.value*3}}>
            <div className="SnowFlake" style={{animationDelay: `${offset.delay * 2}s`}}></div>
        </div>
    )
}

export default SnowFlake;