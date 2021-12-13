import react from 'react';
import './clear.css'

export const Clear = () => {

    return (
        <div className="clear">
            <div className='clearCloud'></div>
            <div className='clearCloud' style={{animationDelay: "4s", animationDuration: "12s", top: "6%"}}></div>
            
        </div>
    )
}

export default Clear;