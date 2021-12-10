import react from "react";
import "./snowCloud.css";
import SnowFlake from "../SnowFlake";

const randomTime = function (time) {
    return Math.random() * time;
};

const SnowCloud = ({amount}) => {
    let nums = [amount.value];
    for (let i = -amount.value/2; i < amount.value/2; i++) {
        nums[i + amount.value/2] = i;
    }

    return (
        <div>
             <div className="snowCloud"></div>
            {nums.map(function (n) {
                return (
                    <SnowFlake key={n} offset={{ value: n*1.7, delay: randomTime(1) }} />
                );
            })} 
        </div>
    );
};

export default SnowCloud;
