import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card} from 'react-bootstrap';
import './NvCarousel.css';
import NvImg1 from  './NvImg1.jpg'; 
import NvImg2 from  './NvImg2.jpg'; 
import NvImg3 from  './NvImg3.jpg'; 
import NvImg4 from  './NvImg4.jpg'; 
import MenuQr from  './MenuQr.png'; 
import ImagMap from  './ImagMap.png'; 

const NvCarousel = (props) => {
    return (
     
      <>
      <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={NvImg1} width="400" height="600"
          

          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={NvImg2}  width="400" height="600"
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={NvImg4}  width="400" height="600"
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    <div class="Information">
<Card bg="dark" text="light" >
  <Card.Header as="h5">Horario</Card.Header>
  <Card.Body>
    <Card.Title>Lunes a Viernes</Card.Title>
    <Card.Text>
     8:00 - 16:00
    </Card.Text>
    <Card.Title>Sabados</Card.Title>
    <Card.Text>
     8:00 - 14:00
    </Card.Text>
  </Card.Body>
</Card>
  </div>

  <div class="Information">
    <Card bg="dark" text="light" >
    <Card.Body>
      <Card.Title >
      Conoce nuestro establecimiento
      </Card.Title>
    </Card.Body>
    <Card.Img variant="bottom" src={ImagMap}    />
  </Card>
  </div>

  <div class="Information">
    <Card bg="dark" text="light" >
    <Card.Body>
      <Card.Title >
      Menu
      </Card.Title>
    </Card.Body>
    <Card.Img variant="bottom" src={MenuQr} height="800"  />
  </Card>
  </div>

    </>


        );
}

export default NvCarousel;