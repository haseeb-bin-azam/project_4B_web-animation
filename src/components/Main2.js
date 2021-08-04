import React, {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

import '../App.css'

import useWebAnimations from "@wellyshen/use-web-animations";
import image1 from './images/image1.svg';

const Main2 = () => {

    //animation on scroll
    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true,
            easing:"ease-in-out",  
        });
    }, [])

    //movement for brain
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
                <div className='float-child1' data-aos='fade-right'>
                    <img className='image1' ref={ref} src={image1} alt="" width='100%' />
                </div>
                <div className='float-child2' data-aos='fade-left'>
                    <h1 className='uxwriting'>UX Writing</h1>
                    <p className='uxwriting-para'>I develop clear and useful text in product interfaces to help users reach a specific goal, whether that's completing a form or tapping a button. This includes every type of content from on-screen help systems, user onboarding and in-app messages to push notifications and tooltips.</p>
                    <span className='span-main'>
                        <span className='spantag'> Headlines&taglines </span> 
                        <span className='spantag'> :ContentStrategy </span>
                        <span className='spantag'> :Blogs&Articles </span>
                        <span className='spantag'> eDMs&Newsletters </span>
                        <span className='spantag'> :SocialMediaContent </span>
                        <span className='spantag'> :VideoScripts </span>
                        <span className='spantag'> Whitepapers</span>
                        <span className='spantag'></span>
                    </span>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Main2;