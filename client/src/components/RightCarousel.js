import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import whatIsIt from '../assets/images/what.svg';
import whyUseIt from '../assets/images/why.svg';
import easeOfUse from '../assets/images/ease.svg';
require('../styles/right_carousel.css');

export default class RightCarousel extends Component {

    render() {

        return(
            <Carousel 
                className="right_carousel" 
                dragging={true}
                autoplay={true}
                autoplayInterval={5000}
                edgeEasing="easeInBounce"
                speed={700}
                renderBottomCenterControls={({ currentSlide }) => (
                        <div className="carousel_controls"></div>
                )}
                renderCenterRightControls={({ previousSlide }) => (
                    <div className="carousel_controls"></div>
                )}
                renderCenterLeftControls={({ previousSlide }) => (
                    <div className="carousel_controls"></div>
                )}
                wrapAround={true}
            >
                <div className="carousel_slide">
                    <img className="what_is_it_image carousel_images" src={whatIsIt} alt="What is it?"/>
                    <h3>Live schedule your timetable with friends / colleagues.</h3>
                </div>
                <div className="carousel_slide">
                    <img className="why_use_it_image carousel_images" src={whyUseIt} alt="What is it?"/>
                    <h3>Use it to enhance productivity by avoiding schedule collision.</h3>
                </div>
                <div className="carousel_slide">
                    <img className="ease_of_use_image carousel_images" src={easeOfUse} alt="What is it?"/>
                    <h3>Easy to use. Manage on the go. Make Remote life easier.</h3>
                </div>
            </Carousel>
        );
    }
}