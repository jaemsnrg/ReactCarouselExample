import React from 'react';
import Slider from 'react-styled-carousel';
import Dot from './dot'
import { DotsWrapper } from './carousel.styles'

const Carousel = () => {
    return ( <div>
        <Slider 
            cardsToShow={1}
            padding="0px 25px"
            margin="3em 0 0 0"
            showArrows={false}
            autoSlide={3000}
            DotsWrapper={DotsWrapper}
            Dot={<Dot />}
        >
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1>
            <h1>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </h1>
            <h1>minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali</h1>
            <h1>ex ea commodo consequat. Duis aute irure dolor in reprehenderit </h1>
        </Slider>
    </div> );
}
 
export default Carousel;