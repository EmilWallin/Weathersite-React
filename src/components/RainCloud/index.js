import react from "react";
import "./rainCloud.css";
import RainDrop from "../RainDrop";

const randomTime = function (time) {
    return Math.random() * time;
};

const RainCloud = ({amount}) => {
    let nums = [amount.value];
    for (let i = -amount.value/2; i < amount.value/2; i++) {
        nums[i + amount.value/2] = i * 2.6;
    }

    return (
        <div>
            <div className="cloud"></div>
            {nums.map(function (n) {
                return (
                    <RainDrop key={n} offset={{ value: n, delay: randomTime(1) }} />
                );
            })}
        </div>
    );
};

export default RainCloud;
