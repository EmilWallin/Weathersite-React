import react from "react";
import "./overcast.css";

const Overcast = ({ amount }) => {
    return (
        <div className="overcast">
            <div className="left"></div>
            <div className="leftMost" style={{animationDelay: "2s"}}></div>
            <div className="right" style={{animationDelay: "0.5s"}}></div>
            <div className="rightMost"  style={{animationDelay: "1.1s"}}></div>
        </div>
    );
};

export default Overcast;
