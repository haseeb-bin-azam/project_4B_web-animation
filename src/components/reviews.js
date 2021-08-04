import React from 'react'
import reviews1 from './images/reviews1.svg'
import reviews3 from './images/reviews3.svg'
import reviews4 from './images/reviews4.svg'
import reviews5 from './images/reviews5.svg'
import reviews6 from './images/reviews6.svg'

function Reviwes() {

    // const { ref } = useWebAnimations({
    //     keyframes: {
    //         transform: "translate(0, 40px)", // Move by 40px vertically
    //     },
    //     animationOptions: {
    //         duration: 2000, // Run for 2000ms
    //         // iterations: o, // Repeat infinite
    //         direction: "alternate", // Run the animation forwards and then backwards
    //         easing: "ease-in-out",
    //         once: true
    //     }
    // });

    return (
        <div className='reviws_main_div'>
            <div className='forpadding'></div>
            <div className='reviews-heading'>
                <h3>Reviews</h3>
            </div>
            <div className='reviews__container'>

                <div className='reviewsbox' >
                    <div className='reviewspic'>
                        <img src={reviews1} alt="" width='200px' />
                    </div>
                    <div className='reviewstext'>
                        <div className='reviewsupper-div'>
                            <p>Owner & Operator – Ausbeds</p>
                        </div>
                        <div className='reviewslower-div'>
                            <p>"..innovative"</p>
                            <p>"..seamless UX"</p>
                            <p>"..more online sales"</p>
                        </div>
                    </div>

                    
                </div>

                <div>

                    <div className='reviewsbox' data-aos='fade-right'>
                        <div className='reviewspic'>
                            <img src={reviews3} alt="" width='200px' />
                        </div>
                        <div className='reviewstext'>
                            <div className='reviewsupper-div'>
                                <p>Owner & Operator – Ausbeds</p>
                            </div>
                            <div className='reviewslower-div'>
                                <p>"..innovative"</p>
                                <p>"..seamless UX"</p>
                                <p>"..more online sales"</p>
                            </div>
                        </div>
                    </div>



                    <div className='reviewsbox' data-aos='fade-left'>
                        <div className='reviewspic'>
                            <img src={reviews4} alt="" width='200px' height='200px' />
                        </div>
                        <div className='reviewstext'>
                            <div className='reviewsupper-div'>
                                <p>Owner & Operator – Ausbeds</p>
                            </div>
                            <div className='reviewslower-div'>
                                <p>"..innovative"</p>
                                <p>"..seamless UX"</p>
                                <p>"..more online sales"</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div>

                    <div className='reviewsbox' data-aos='fade-up-right'>
                        <div className='reviewspic'>
                            <img src={reviews5} alt="" width='200px' />
                        </div>
                        <div className='reviewstext'>
                            <div className='reviewsupper-div'>
                                <p>Owner & Operator – Ausbeds</p>
                            </div>
                            <div className='reviewslower-div'>
                                <p>"..innovative"</p>
                                <p>"..seamless UX"</p>
                                <p>"..more online sales"</p>
                            </div>
                        </div>
                    </div>



                    <div className='reviewsbox' data-aos='fade-up-left'>
                        <div className='reviewspic'>
                            <img src={reviews6} alt="" width='200px' height='200px' />
                        </div>
                        <div className='reviewstext'>
                            <div className='reviewsupper-div'>
                                <p>Owner & Operator – Ausbeds</p>
                            </div>
                            <div className='reviewslower-div'>
                                <p>"..innovative"</p>
                                <p>"..seamless UX"</p>
                                <p>"..more online sales"</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Reviwes
