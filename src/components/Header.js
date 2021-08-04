import React from 'react'

import '../App.css'

import useWebAnimations from "@wellyshen/use-web-animations";

const Header = () => {
    const { ref } = useWebAnimations({
        keyframes: {
            transform: "translate(60px, 0)", // Move by 60px hotizontally
            color: ["orange", "red", "green"], // Go through three colors
        },
        animationOptions: {
            duration: 2000, // Run for 2000ms
            iterations: Infinity, // Repeat infinite
            direction: "alternate", // Run the animation forwards and then backwards
            easing: "ease-in-out", 
        }
    });

    return (
            <div className='navbar-div'>
                <h1 ref={ref} className='navbar-h1'>Switch Experience</h1>
            </div>
    );
};

export default Header;