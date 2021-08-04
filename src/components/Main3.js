import React from 'react'

import '../App.css'

import useWebAnimations from "@wellyshen/use-web-animations";
import image2 from './images/image2.svg';

const Main3 = () => {
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
        <div className='body2'>
            <div className='float-container'>
                <div className='float-child2'>
                    <h1 className='websitecopywriting'>Website Copywriting</h1>
                    <p className='websitecopywriting-para'>Your website is a dialogue with your audience. I capture the essence of your business and communicate it clearly. Carefully considered writing and SEO best practices allow me to craft the perfect user journey online. Let me draw the map that guides users every step of the way from discovery, to consideration, to conversion.</p>
                    <span className='span-main'>
                        <span className='spantag1'> Headlines&taglines </span>
                        <span className='spantag'> InformationArchitecture </span>
                        <span className='spantag'> :Wireframes </span>
                        <span className='spantag1'> :CompetitorAnalysis </span>
                        <span className='spantag'> pageSEO </span>
                        <span className='spantag'> :OffpageSEO </span>
                        <span className='spantag1'> :USP/UVP </span>
                        <span className='spantag'> LandingPage</span>
                    </span>
                </div>
                <div className='float-child1'>
                    <img className='image1' ref={ref} src={image2} alt="" width='100%' />
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Main3;