import React from 'react';
import "../RainDrop/rainDrop.css";

const RainDrop = ({offset}) => {

    return (
        <div style={{ marginLeft: offset.value*3 + 4 }}>
            <div className="RainDrop" style={{animationDelay: `${offset.delay}s`}}></div>
        </div>
    )
}



export default RainDrop;