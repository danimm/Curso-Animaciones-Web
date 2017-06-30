import React, { Component } from 'react';
import './css/style.css';
import Portada from './components/Portada.jsx';
import Descripcion from './components/Descripcion.jsx';
import Precios from './components/Precios.jsx';

import Footer from './components/Footer.jsx';

import logoPortada from './images/logo.svg';

const data = {

  menu: [
    {
      href: 'index.html',
      title: 'Home',
    },
    {
      href: 'precios.html',
      title: 'precios',
    },
    {
      href: 'habitaciones.html',
      title: 'habitaciones',
    },
    {
      href: 'condiciones.html',
      title: 'condiciones',
    }
  ],
  logoPortada: logoPortada,

  precio: [
    {
      nPersonas: '3 Personas',
      precioDia: '85€',
      features: [
        'Precio por día.',
        'Estancia mínima 2 noches.',
      ]
    },
    {
      nPersonas: '5 Animales',
      precioDia: 'muuucho',
      features: [
        'Precio de por vida.',
        'Estancia mínima máxima.',
      ]
    },
    {
      nPersonas: '2 Persona 1 Animal',
      precioDia: '2+2€',
      features: [
        'Precio por persona.',
        'Estancia mínima indispensable.',
      ]
    },
  ]
};


class App extends Component {
  render() {
    return (
      <section className="Huetor">
        <Portada menu={data.menu} logo={data.logoPortada}/>
        {/* Portada */}
        <Descripcion />
        {/* Habitaciones */}
        {/* Precios */}
        <Precios precio={data.precio}/>
        <Footer />
        {/* Footer */}

      </section>
    );
  }
}

export default App;
