import React, { Component } from 'react';
import logo from '../images/logo.svg';
import isa from '../images/contacto1.min.jpg';


class Footer extends Component {
  render() {
    return (
      <footer className="footer">
          <h3>¿Tienes preguntas?</h3>
          <div className="contenedor-footer">
          <div className="contenedor cont">
            <div className="contacto-huetor">

                      <img src={logo} alt="logo" height="100" />
                  <span>Paraje la Rotura</span>
                  <span>29712</span>

                  <span>La Viñuela, Málaga, España</span>
              </div>
              <div className="contacto">
                  <div className="col-1">
                  <figure>
                      <img src={isa} alt="Isa" width="200" />
                  </figure>
                  </div>
                  <div className="col-2">
                  <h4>Isabel Hijano Pérez</h4>
                  <h4>CEO Alojamientos Huetor</h4>
                  <a href="tel:+34659589562">
                      <strong>Teléfono 1:</strong>
                      <span> +34 659 589 562</span>
                  </a>
                  <a href="tel:+34660059190">
                      <strong>Teléfono 2:</strong>
                      <span>+34 660 059 190</span>
                  </a>
                  <a href="tel:+34660059190">
                      <strong>Email:</strong>
                      <span>info@alojamientoshuetor.com</span>
                  </a>
                  </div>
              </div>
          </div>
          </div>
      </footer>
    )
  }
}

export default Footer;
