import react from "react";
import "./cloudy.css";

const Cloudy = ({ amount }) => {
    return (
        <div>
            <div className="bigShadow">
                <div className="cloud"></div>
            </div>

            <div className="smallShadow">
                <div className="smallCloud"></div>
            </div>
        </div>
    );
};

export default Cloudy;
