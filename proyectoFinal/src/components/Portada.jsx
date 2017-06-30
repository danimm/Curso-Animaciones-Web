import React, { Component} from 'react';


class Portada extends Component {
  render() {

    return(
      <section className="portada ">
      <div className="background">
         <div className="centrar-titulo" id="centrar-titulo">
          <div className="contenedor cont-portada">
                  <h1 className="titulo">Alojamientos rurales en Málaga</h1>
                  <h3 className="subtitulo">El lugar perfecto para relajarse y disfrutar de la Axarquia.</h3>
                  <a href="#habitaciones" className="button">Conoce más</a>
           </div>
              </div>
      </div>
      <header className="header contenedor">
          <div className="cabecera">
              <img className="logo" src={this.props.logo} alt="logo" width="250" height="80" />
              <nav id="navbar" className="navbar">
                  <ul>
                    {this.props.menu.map((item)=>{
                      return (
                        <li><a href={item.href}>{item.title}</a></li>
                      )

                    })}
                  </ul>
              </nav>

          </div>


      </header>
       </section>
      )
  }
}

export default Portada;
