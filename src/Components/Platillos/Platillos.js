import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardGroup} from 'react-bootstrap';
import Img1 from  './Img1.jpeg'; 
import Img2 from  './Img2.jpeg'; 
import Img3 from  './Img3.jpeg'; 
import Img4 from  './Img4.jpeg'; 
import Img5 from  './Img5.jpeg'; 
import Img6 from  './Img6.jpeg'; 
import Img7 from  './Img7.jpeg'; 
import Img8 from  './Img8.jpeg'; 
import Img9 from  './Img9.jpeg'; 
import Img10 from  './Img10.jpeg'; 
import Img11 from  './Img11.jpeg'; 
import Img12 from  './Img12.jpeg'; 


const Platillos = (props) => {
    return (
        <>
        <Card bg="dark" text="light">
  <Card.Body >
    <Card.Title>Platillos de vitrina</Card.Title>
  </Card.Body>
</Card>

        <br />
        <CardGroup >
        <Card>
    <Card.Img variant="top" src={Img1} />
    <Card.Body>
      <Card.Title>Ensalada con pechuga empanizada </Card.Title>
      <Card.Text>
      Ingredientes: Lechuga, Zanahoria, Arándanos, Jamón, Queso, Pechuga<br/>
        $45.00
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={Img2} />
    <Card.Body>
      <Card.Title>Asado de puerco</Card.Title>
      <Card.Text>
      Consta de asado puerco arroz y frijoles<br/>
        $45.00
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    <Card.Img variant="top" src={Img3} />
    <Card.Body>
      <Card.Title>Chiles rellenos</Card.Title>
      <Card.Text>
      Consta de tres chiles rellenos de queso<br/>
        $45.00
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={Img4} />
    <Card.Body>
      <Card.Title>Pasado de puerco</Card.Title>
      <Card.Text>
      Consta de Chile pasado con puerco, arroz y frijoles<br/>
        $45.00
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={Img5} />
    <Card.Body>
      <Card.Title>Pollo en mole</Card.Title>
      <Card.Text>
      Consta de Pollo en mole y arroz blanco<br/>
        $45.00
      </Card.Text>
    </Card.Body>
  </Card>
  </CardGroup>
<br/>
<CardGroup >
        <Card>
    <Card.Img variant="top" src={Img6} />
    <Card.Body>
      <Card.Title>Pollo con chipotle</Card.Title>
      <Card.Text>
        Consta de Pollo con chipotle y arroz<br/>
        $45.00
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
  
  </Card>
  <Card>


  </Card>
  <Card>
    
  </Card>
  <Card>
    
  </Card>
  </CardGroup>
<br/>
<Card bg="dark" text="light">
  <Card.Body>
    <Card.Title>1/2 Litros</Card.Title>
  </Card.Body>
</Card>

        <br />
  <CardGroup >
  <Card>
    <Card.Img variant="top" src={Img7} />
    <Card.Body>
      <Card.Title>Arroz</Card.Title>
      <Card.Text>
      Consta de un Arroz rojo<br/>
        $30.00
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={Img8} />
    <Card.Body>
      <Card.Title>Frijoles refritos</Card.Title>
      <Card.Text>
      Consta de unos Frijoles refritos con queso<br/>
        $30.00
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={Img9}/>
    <Card.Body>
      <Card.Title>Espagueti con elote</Card.Title>
      <Card.Text>
      Consta de Espagueti con crema y elote<br/>
        $35.00
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={Img10} />
    <Card.Body>
      <Card.Title>Espagueti con chipotle</Card.Title>
      <Card.Text>
      Consta de Espagueti con crema y chipotle <br/>
        $35.00
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
  </Card>
  </CardGroup>

  <br />
  <Card bg="dark" text="light">
  <Card.Body>
    <Card.Title>Postres</Card.Title>
  </Card.Body>
</Card>

        <br />

  <CardGroup >
  <Card>
    <Card.Img variant="top" src={Img11} />
    <Card.Body>
      <Card.Title>Pay de limon</Card.Title>
      <Card.Text>
      Consta de una rebanada de Pay de limón  <br/>
        $25.00 y $30.00
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={Img12} />
    <Card.Body>
      <Card.Title>Choco Flan</Card.Title>
      <Card.Text>
      Consta de un rebanada de Choco Flan<br/>
        $25.00 y $30.00
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
  </Card>
  <Card>
  </Card>
  <Card>
  </Card>
  </CardGroup>
</>



        );
}

export default Platillos;