import react from "react";
import "./cloudy.css";

const Cloudy = ({amount}) => {
    return (
        <div>
            <div className="bigShadow"></div>
            <div className="cloud"></div>
            <div className="smallShadow"></div>
            <div className="smallCloud"></div>
        </div>
    );
};

export default Cloudy;