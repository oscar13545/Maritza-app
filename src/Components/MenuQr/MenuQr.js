import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';
import MenuQr1 from  './MenuQr1.jpg'; 

const MenuQr = (props) => {
    return (
        
        <Image src={MenuQr1}  fluid />

        );
}

export default MenuQr;