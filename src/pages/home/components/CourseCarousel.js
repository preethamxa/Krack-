import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import I1 from '../../../img/home/CourseCarousel/1.png';
import I2 from '../../../img/home/CourseCarousel/2.png';
import I3 from '../../../img/home/CourseCarousel/3.png';
import I4 from '../../../img/home/CourseCarousel/4.png';
import I5 from '../../../img/home/CourseCarousel/5.png';
import I6 from '../../../img/home/CourseCarousel/6.png';
import I7 from '../../../img/home/CourseCarousel/7.png';
import I8 from '../../../img/home/CourseCarousel/8.png';
import I9 from '../../../img/home/CourseCarousel/9.png';
import I10 from '../../../img/home/CourseCarousel/10.png';
import "../style/cc.css";

export default function Carousel2() {
  return (
    <>
    <div className="home-bottom-3">
    <p style={{textAlign: "center"}} id="text-edit"><span id="text-change1">Speak your</span><span id="text-change2"> language</span></p>
    <MDBCarousel interval= "1000">
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={I1}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={I2}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={I3}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={I4}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src={I5}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={6}
        src={I6}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={7}
        src={I7}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={8}
        src={I8}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={9}
        src={I9}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={10}
        src={I10}
        alt='...'
      />
    </MDBCarousel>
    </div>
    </>
  );
};