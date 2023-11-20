import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import silvera from '../Shared/Images/silver.jpg';
import Corousel1 from '../Shared/Images/Corousel1.jpg';
import Corousel2 from '../Shared/Images/Corousel2.jpg';

export class HomeLandComp extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid mt-5" style={{ height: '20px' }}></div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Carousel className="carousel" style={{ width: '100%' }}>
                <Carousel.Item interval={4000}>
                <img
  src={Corousel1}
  alt="First slide"
  style={{
    width: '100%',
    height: '400px',
                      borderRadius: '20px 0px 0px 20px',
                    }}
                  />
               
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                  <img
                    src={"https://www.khazanajewellery.com/wp-content/uploads/2016/06/HP_Banner_Slider-3.jpg"}
                    alt="Second slide"
                    style={{
                      width: '100%',
                      height: '400px',
                      borderRadius: '20px 0px 0px 20px',
                    }}
                  />
                 
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                  <img
                    src={Corousel2}
                    alt="Third slide"
                    style={{
                      width: '100%',
                      height: '400px',
                      borderRadius: '20px 0px 0px 20px',
                    }}
                  />
                 
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeLandComp;