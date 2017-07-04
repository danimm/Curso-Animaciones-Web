import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './css/style.css';
import './css/animation.css';
import Huetor from './Huetor';
import registerServiceWorker from './registerServiceWorker';
import logoPortada from './images/logo.svg';
import { Provider } from 'react-redux';
import { createStore} from 'redux';


import cheet from 'cheet.js';






const initialState = {
  isAnimated : false,
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

function reducer(state, action){
  switch (action.type) {
    case 'UPDATE_PROPS':{
      const newProps = action.payload.props;
      return{...state, ...newProps}
    }
    default:
    return state

  }
}

const store = createStore(reducer, initialState);

const easter = {
  isAnimated : 'is-animated',
  menu: [
  ],
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
      nPersonas: 'probando',
      precioDia: 'chuchupana',
      features: [
        'Precio excesivamente caro.',
        'Estancia confortable.',
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
}

cheet('h u e t o r', () =>{
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: easter
    }
  });
})
cheet('g o b a c k', () =>{
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: initialState
    }
  });
})

ReactDOM.render(
  <Provider store={store}>
  <Huetor />
</Provider>,
  document.getElementById('root'));
registerServiceWorker();
