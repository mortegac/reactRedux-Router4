import React, {Component} from 'react';
// import HeaderNav from '../components/headerNav/headerNav'

// const styles = {
//     position: 'absolute', 
//     left: '-5000px'
// }

class Novedades extends Component {
  render () {
    return (
        <section className="hero is-providencia">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-half is-left">
                            <p className="title">Actualiza <strong>Tus Datos</strong></p>
                            <p className="subtitle">Ingresa tu Rut y recibe las instrucciones en tu correo</p>
                        </div>

                        <div className="column is-one-quarter">
                            <form className="validate">

                                <div id="mc_embed_signup_scroll">
                                    <div className="control is-grouped">
                                        <div className="control has-icon is-expanded">
                                            <input type="email" className="input is-flat required rut" placeholder="Ingresa tu Rut"/>
                                            <i className="fa fa-user"></i>
                                        </div>
                                        <div className="control">
                                            <input type="submit" value="Enviar" name="subscribe" id="mc-embedded-subscribe" className="button is-white is-outlined"/>
                                        </div>
                                    </div>
                                   
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    )
  }
}

export default Novedades;
