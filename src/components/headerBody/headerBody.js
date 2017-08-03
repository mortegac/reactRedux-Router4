import React, {Component} from 'react';

// import HeaderLogo from '../../components/headerLogo'


class HeaderBody extends Component {
  render () {
    return (
            <div className="hero-body">
                <div className="container">
                <div className="columns is-vcentered">
                    <div className="column">
                        <p className="title"><strong>DIRECTORIO TELEFÓNICO</strong></p>
                        <p className="subtitle">
                        - Directorio de Funcionarios y unidades Municipales - 
                        </p>
                    </div>
                   { 
                    // <div className="column is-narrow">
                    //     <div id="carbon" className="box">
                    //         <div id="carbonads">
                               
                    //                 <h1>Recuerde actualizar sus datos</h1>
                               
                    //         </div>
                    //     </div>
                    // </div>
                    }



                </div>
                </div>
           </div>
    )
  }
}

export default HeaderBody;
