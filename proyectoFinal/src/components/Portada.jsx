import React, { Component} from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Heart from './heart.jsx';

function mapStateToProps(state){
  return {
    logo: state.logoPortada,
    menu: state.menu,
    isAnimated: state.isAnimated,
  }
}


class Portada extends Component {
  renderHeart(){
    const hearts = new Array(100).fill({})
    return(
      hearts.map((element, index) =>{
        const style = {
          left: Math.floor((Math.random() * (window.innerWidth - 0))) + 0 + "px",
          animationDelay: Math.floor((Math.random() * (10000 - 0))) + 0 + "ms"
          // left: index * 50 + "px"
        }
        return(
          <Heart key={index} style={style} />
        )
      })
    )
  }
  render() {

    return(
      <section className="portada ">

      <CSSTransitionGroup
        transitionName="animationInOut"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={800}
      >
        <div className={`background ${this.props.isAnimated}`} key="portada">
            {
              !this.props.isAnimated &&
             <div className="centrar-titulo" id="centrar-titulo">
              <div className="contenedor cont-portada">
                      <h1 className="titulo">Alojamientos rurales en Málaga</h1>
                      <h3 className="subtitulo">El lugar perfecto para relajarse y disfrutar de la Axarquia.</h3>
                      <a href="#habitaciones" className="button">Conoce más</a>

               </div>
                  </div>
        }
      </div>
    </CSSTransitionGroup>

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
      {
        this.props.isAnimated &&
        this.renderHeart()
      }
       </section>
      )
  }
}

export default connect(mapStateToProps)(Portada);
