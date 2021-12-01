import react from 'react';
import "./rainCloud.css";
import RainDrop from '../RainDrop';

const RainCloud = () => {
    let nums = [30];
    for (let i = -15; i < 15; i++) {
        nums[i+15] = i*3;
    }

    return (
        <div>
            <div className="cloud"></div>

            {            
                nums.map(function (n) {
                return <RainDrop offset={{value: n*2}}/>
                })
            }
        </div>

    )
}

export default RainCloud;