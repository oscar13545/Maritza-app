import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Nav} from 'react-bootstrap';

const Footer = (props) => {
    return (
     
        <Card bg="dark" text="light">
        <p className="text-center mt-4 mb-4">Contactanos:</p>
          <Nav className="justify-content-center" activeKey="/home">
          
            <Nav.Item>
              <Nav.Link href="https://www.facebook.com/Chef-Maritza-Heredia-110275133831334"eventKey="link-1">Facebook</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://www.instagram.com/chefmaritza_heredia/" eventKey="link-1">Instagram</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://www.google.com/maps/dir/28.6086811,-106.0640898/28.6086888,-106.0637981/@28.6086688,-106.066122,17z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0"eventKey="link-1">Ubicacion</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link  href="https://api.whatsapp.com/send?phone=526141627026&fbclid=IwAR1S0wLP6ARNkrXVUuv1YbJPieaajopHEffl8KWkRvfH3sEFNUOoEIrmpZk" eventKey="link-1">
            6141627026
              </Nav.Link>
            </Nav.Item>
            
          </Nav>
          </Card>



        );
}

export default Footer;