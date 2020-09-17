import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import SEO from '../Assets/1.jpg';
import Quality from '../Assets/2.jpeg'
import Responsive from '../Assets/3.jpeg'
import Security from '../Assets/4.jpeg'


class CaruselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item  className='mt-0'>
                    <img
                      className='d-block w-100 '
                      height='650px'
                      src={SEO}
                      alt='first'
                    />
                    <Carousel.Caption className='text-danger'>
                      <h1>FAST RESULTS</h1>
                      <h3> We save you time. Time saves you money.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block  w-100 '
                        height='650px'
                        src={Quality}
                        alt='seconds'
                    />
                    <Carousel.Caption className='text-primary'>
                <h1>HIGH QUALITY</h1>
                  <h3>We appreciate every client. Our reputation – our money.</h3>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        height='650px'
                        src={Responsive}
                        alt='third'
                    />
                    <Carousel.Caption className='text-danger'>
                        <h1>CLEAR PRICING</h1>
                         <h3>You pay when the project is completed.</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        height='600px'
                        src={Security}
                        alt='fourth'
                    />
                    <Carousel.Caption className='text-primary'>
                        <h1>HONESTY</h1>
                           <h3>We will not try to upsell you any functions your don't need.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
export default CaruselBox;