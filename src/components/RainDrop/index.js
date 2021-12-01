import React from 'react';
import react from 'react';
import "../RainDrop/rainDrop.css";

const RainDrop = ({offset}) => {
    const random = (Math.random() -0.5) * 7;
    return (
        <div style={{marginLeft: offset.value * 3 + random}}>
            <div className="RainDrop"></div>
        </div>
    )
}


export default RainDrop;