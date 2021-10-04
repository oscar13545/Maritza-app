import React from "react"
import './Footer.css';

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="footer-basic ">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Chef Maritza Heredia</h5>
                <p>Comida para llevar a precios accesibles, contamos con área de comedor, excelente servicio y un ambiente agradable.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Contactos</h5>
                <ul className="list-unstyled">
                    <li><a src="https://www.facebook.com/Chef-Maritza-Heredia-110275133831334">Facebook</a></li>
                    <li><a src="https://www.instagram.com/chefmaritza_heredia/">Instagram</a></li>
                    
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Informacion</h5>
                <ul className="list-unstyled">
                    <li><a src="https://www.google.com/maps/dir/28.6031872,-106.070016/28.6086888,-106.0637981/@28.6053808,-106.0721522,16z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0">Ubicacion</a></li>
                    <li><a>614 162 7026</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2021 Copyright: Ched Maritza Heredia
    </div>
    </div>
</footer>

export default Footer
