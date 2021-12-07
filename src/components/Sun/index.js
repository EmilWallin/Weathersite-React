import react from "react";
import "./sun.css";

import SunRay from "../SunRay";


const Sun = () => {
    let nums = [30];
    for (let i = 0; i < 30; i++) {
        nums[i] = i;
    }

    return (
        <div>
             <div className="sun"></div>
             {nums.map(function (n) {
                return (
                     <SunRay key={n} offset={{ value: n, delay: n }} />

                );
            })}  
        </div>
    );
};

export default Sun;
