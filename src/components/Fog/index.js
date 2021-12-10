import react from "react";
import "./fog.css";

export const Fog = () => {
    return (
        <div className="fogBlock">
            <div className="fog"></div>
            <div className="fog" style={{animationDelay:"0.8s"}}></div>
            <div className="fog" style={{animationDelay:"1.2s"}}></div>
            <div className="fog" style={{animationDelay:"0.4s"}}></div>
            <div className="fog" style={{animationDelay:"1s"}}></div>
        </div>
    );
};

export default Fog;
