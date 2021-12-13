import react from "react";
import "./mist.css";

export const Mist = () => {
    return (
        <div className="mistBlock">
            <div className="mist"></div>
            <div className="mist" style={{animationDelay:"0.9s"}}></div>
            <div className="mist" style={{animationDelay:"1.4s"}}></div>
            <div className="mist" style={{animationDelay:"0.4s"}}></div>
            <div className="mist" style={{animationDelay:"1.1s"}}></div>
            <div className="mist" style={{animationDelay:"0.3s"}}></div>
        </div>
    );
};

export default Mist;