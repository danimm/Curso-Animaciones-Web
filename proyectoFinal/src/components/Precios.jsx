import React, { Component } from 'react';

class Precios extends Component {
  render() {

    // const precio = [
    //   {
    //     nPersonas: '3 Personas',
    //     precioDia: '85€',
    //     features: [
    //       'Precio por día.',
    //       'Estancia mínima 2 noches.',
    //     ]
    //   },
    //   {
    //     nPersonas: '5 Animales',
    //     precioDia: 'muuuncho',
    //     features: [
    //       'Precio de por vida.',
    //       'Estancia mínima máxima.',
    //     ]
    //   },
    //   {
    //     nPersonas: '5 Animales',
    //     precioDia: 'muuuncho',
    //     features: [
    //       'Precio de por vida.',
    //       'Estancia mínima máxima.',
    //     ]
    //   },
    // ]

    return(
      <section className="precios">
         <div className="TempAltaInfo">
         <h2 className="introduccion">Temporada alta</h2>
         <h3 className="tempAlta">Válido desde el <span>1 de Junio al 15 de Septiembre.</span></h3>
          <h3 className="tempAlta">* Para <span>Julio y agosto</span> la estancia mínima es de <span>1 semana</span> y el precio mínimo <span>4 personas.</span></h3>
         </div>
         <div className="contTempAlta">{
           this.props.precio.map((tipo, index) =>  {
             return (
               <div className="tipo1" key={index}>
                 <div className="contenedorPAX">
                   <h4 className="NPax">{tipo.nPersonas}</h4>
                 </div>
                 <div className="precioDia" key={index}>
                   <h2>{tipo.precioDia}</h2>
                 </div>
                 <div className="precioDetalles">
                   {
                     tipo.features.map((feature, index) => {
                     return (
                       <h3 key={index}>{feature}</h3>
                     )
                   })}
                 </div>
                 <div className="precioButton">
                   <a href="#" className="button reservar">Reservar</a>
                 </div>
               </div>
             )
           })}
         </div>
        </section>
    )}
}

export default Precios;
