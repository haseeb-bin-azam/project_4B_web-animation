import React from 'react'

import '../App.css'

import useWebAnimations from "@wellyshen/use-web-animations";

const MainCortex = () => {
    //movement for braing
    const { ref } = useWebAnimations({
        keyframes: {
            transform: "translate(0, 40px)", // Move by 40px vertically
        },
        animationOptions: {
            duration: 2000, // Run for 2000ms
            iterations: Infinity, // Repeat infinite
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out",
        }
    });

    return (
        <div className='main1-div'>
            <div className='main-heading-div'>
                <h1 className='cortexheading'>CORTEX</h1>
                <h2 className='copywriterheading'>COPYWRITER</h2>
                <div className='bodypara'>
                    <p>Enhance your communications with psychology
                        -based copywriting and UX writing and WebDevelopment</p>
                </div>
                <div className='bodybutton'>
                    <button className='bodybuttonn'>
                        Send a message
                    </button>
                </div>
            </div>

            <div className='bodyimage'>
                <img className='bodyimage1' src="http://salman-project4b.surge.sh/images/Intro_Featured_Image_Empty.svg?fbclid=IwAR1Y5hswrINQYRg71oEe7f5sBHok8uTD2N0NEdZzOqgXbU44ozpSJGIhZIE" alt="" />
                <img className='bodyimage2' ref={ref} src="http://salman-project4b.surge.sh/images/Intro_Brain.svg?fbclid=IwAR0s8O5k4Q1ceXFF40vZeXy9LvpROikQZLLLqnz3P3ajss64iJgMZ4MEUHE" alt="" />
            </div>
        </div>
    );
};

export default MainCortex;