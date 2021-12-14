import React from 'react';
import "../SnowFlake/snowFlake.css";

const SnowFlake = ({offset}) => {
    return (
        <div style={{ marginLeft: offset.value*2.4}}>
            <div className="SnowFlake" style={{animationDelay: `${offset.delay * 4}s`}}></div>
        </div>
    )
}

export default SnowFlake;