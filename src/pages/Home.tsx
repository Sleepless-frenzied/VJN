import React, {useState} from 'react'
import { Wheel } from 'react-custom-roulette'
import {useContextProvider} from "../assets/Data";



const outerBorderColor = '#eeeeee';
const outerBorderWidth = 8;
const innerBorderColor = '#30261a';
const innerBorderWidth = 0;
const innerRadius = 0;
const radiusLineColor = '#eeeeee';
const radiusLineWidth = 5;
const spinDuration = 0.3;


function Home() {

    const context = useContextProvider();
    const {
        data,
        setData,
    } = context;

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);

    const handleSpinClick = () => {
        if (!mustSpin) {
            const newPrizeNumber = Math.floor(Math.random() * data.length);
            setPrizeNumber(newPrizeNumber);
            setMustSpin(true);
        }
    };


    return (
       <div className={"h-full flex flex-col justify-center items-center"}>
           <Wheel
               mustStartSpinning={mustSpin}
               prizeNumber={prizeNumber}
               data={data}
               backgroundColors={['#3e3e3e', '#df3428']}
               textColors={['#ffffff']}

               outerBorderColor={outerBorderColor}
               outerBorderWidth={outerBorderWidth}
               innerRadius={innerRadius}
               innerBorderColor={innerBorderColor}
               innerBorderWidth={innerBorderWidth}
               radiusLineColor={radiusLineColor}
               radiusLineWidth={radiusLineWidth}


               spinDuration={spinDuration}

               onStopSpinning={() => {
                   setMustSpin(false);
               }}
           />
           <br/>
           <button className={' text-red-500 border-2 border-red-500 px-7 py-3 text-2xl hover:animate-ping animate-none'} onClick={handleSpinClick}>
               SPIN
           </button>

       </div>
    );
}


export default Home;
