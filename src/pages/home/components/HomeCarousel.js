import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import I1 from '../../../../public/img/home/HomeCarousel/1-01.png';
import I2 from '../../../../public/img/home/HomeCarousel/1-02.png';
import I3 from '../../../../public/img/home/HomeCarousel/1-03.png';
import I4 from '../../../../public/img/home/HomeCarousel/1-04.png';
import I5 from '../../../../public/img/home/HomeCarousel/1-05.png';
import I6 from '../../../../public/img/home/HomeCarousel/1-06.png';
import I7 from '../../../../public/img/home/HomeCarousel/1-07.png';
import I8 from '../../../../public/img/home/HomeCarousel/1-08.png';
import I9 from '../../../../public/img/home/HomeCarousel/1-09.png';
import I10 from '../../../../public/img/home/HomeCarousel/1-10.png';
import I11 from '../../../../public/img/home/HomeCarousel/1-11.png';
export default function HomeCarousel() {
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
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={11}
        src={I11}
        alt='...'
      />
    </MDBCarousel>
    </div>
    </>
  );
};