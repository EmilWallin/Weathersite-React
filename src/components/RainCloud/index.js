import react from "react";
import "./rainCloud.css";
import RainDrop from "../RainDrop";

const randomTime = function (time) {
    return Math.random() * time;
};

const RainCloud = ({amount}) => {
    let nums = [amount.value];
    for (let i = -amount.value/2; i < amount.value/2; i++) {
        nums[i + amount.value/2] = i;
    }

    return (
        <div>
            <div className="rainCloud"></div>
            {nums.map(function (n) {
                return (
                    <RainDrop key={n} offset={{ value: n*1.7, delay: randomTime(1) }} />
                );
            })}
        </div>
    );
};

export default RainCloud;