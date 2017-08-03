import React, {Component} from 'react';
import Tree from '../components/tree/tree'
import Ionicon from 'react-ionicons'
// import CardList from '../components/cardList/cardList'
import '../utils/app.css'
  

class Directorio extends Component {
    render () {
       

        const direcciones = [
        { id: 1, abrev: 'ALCALDIA' , nombre: 'Alcaldía ' },
        { id: 2, abrev: 'CDS', nombre: 'Corporación de Desarrollo Social ' },
        { id: 3, abrev: 'CLUB PROVIDENCIA', nombre: 'Club Providencia' },
        { id: 4, abrev: 'CONCEJO MUNICIPAL', nombre: 'Concejo Municipal' },
        { id: 5, abrev: 'CONCEJO COMUNAL', nombre: 'Concejo Comunal' },
        { id: 6, abrev: 'DAF', nombre: 'Dirección de Administración' },
        { id: 7, abrev: 'DAOM', nombre: 'Dirección de medio ambiente Aseo Ornato y mantenciones' },
        { id: 8, abrev: 'DBPT', nombre: 'Dirección de Barrios Patrimonios y turismos' },
        { id: 9, abrev: 'DC', nombre: 'Dirección de Control ' },
        { id: 10, abrev: 'DCOM', nombre: 'Dirección de Comunicaciones' },
        { id: 11, abrev: 'DEC', nombre: 'Dirección de Emergencias Comunales ' },
        { id: 12, abrev: 'DGCA', nombre: 'Dirección Gabinete Alcaldía'},
        { id: 13, abrev: 'DIDECO', nombre: 'Dirección de Desarrollo Comunitarío' },
        { id: 14, abrev: 'DIGC', nombre: 'Dirección Innovación y Gestión de Calidad' },
        { id: 15, abrev: 'DJ', nombre: 'Dirección de Tránsito' },
        { id: 16, abrev: 'DOM', nombre: 'Dirección de Obras' },
        { id: 17, abrev: 'DSC', nombre: 'Dirección de Seguridad' },
        { id: 18, abrev: 'DSM', nombre: 'Dirección Secretaría' },
        { id: 19, abrev: 'DT', nombre: 'Dirección de Tránsito' },
        { id: 20, abrev: 'FUNDACION CULTURAL', nombre: 'Fundación Cultural de Providencia' },
        { id: 21, abrev: 'HELP DESK', nombre: 'Help Desk' },
        { id: 22, abrev: 'JUZGADOS', nombre: 'Jusgados de Policía Local' },
        { id: 23, abrev: 'SECPLA', nombre: 'Dirección Secretaría Comunal de Planificación ' }
        ]

/*
 <div className="columns is-mobile is-multiline is-centered">
                                {direcciones.map(x =>
                                    
                                    <div className="column is-half" key={x.id}>
                                        <div className="box">
                                            <p className="notification is-warning has-text-centered">{x.nombre}</p>
                                        </div>
                                    </div>
                                
                                
                                )}
                         </div> 
 <div className="columns is-mobile is-multiline is-centered">
                                {direcciones.map(x =>
                                    
                                    <div className="column is-half" key={x.id}>
                                        <div className="box">
                                            <p className="notification is-warning has-text-centered">{x.nombre}</p>
                                        </div>
                                    </div>
                                
                                
                                )}
                         </div> 
                          <div className="container">
                        
                            
                                
                            <div className="tile is-parent"><div className="tile is-8 is-vertical"><div className="tile">
                            {
                                direcciones.map(x =>
                                
                                    <div className="tile is-parent">
                                    <article className="tile is-child notification is-warning">
                                        <p className="title">...{x.nombre}</p>
                                        <p className="subtitle">Bottom tile</p>
                                    </article>
                                    </div>
                                )
                            }
                            </div></div></div> 
                                
                            
                        


                           
                    
                    </div>

*/
    return (
        <div >
                <section className="section">
                <div className="container">
                    <div className="tile is-ancestor">
                        <div className="tile is-vertical is-12">
                            <div className="tile">
                                <div className="tile is-parent">
                                    <article className="tile is-child box">
                                        <p className="title">Concejo Municipal</p>
                                        <p className="subtitle">Casa de los concejales</p>
                                       <nav className="panel">
  <a className="panel-block is-active">
    <span className="panel-icon">
      <Ionicon icon="ion-ios-telephone-outline" color="#000"/>
    </span>
    bulma
  </a>
  <a className="panel-block">
    <span className="panel-icon">
      <Ionicon icon="ion-ios-telephone-outline" color="#000"/>
    </span>
    marksheet
  </a>
  <a className="panel-block">
    <span className="panel-icon">
      <Ionicon icon="ion-ios-telephone-outline" color="#000"/>
    </span>
    minireset.css
  </a>
  <a className="panel-block">
    <span className="panel-icon">
      <Ionicon icon="ion-ios-telephone-outline" color="#000"/>
    </span>
    jgthms.github.io
  </a>
  <a className="panel-block">
    <span className="panel-icon">
      <i className="fa fa-code-fork"></i>
    </span>
    daniellowtw/infboard
  </a>

</nav>
                                    </article>
                                </div>
                                <div className="tile is-8 is-vertical">
                                    <div className="tile">
                                        <div className="tile is-parent">
                                            <article className="tile is-child box notification is-primary">
                                                <p className="title">Mesa de Ayuda</p>
                                                <p className="subtitle"></p>
                                                <table className="table">
                                                    <tr>
                                                        <td><Ionicon icon="ion-ios-telephone-outline" fontSize="16px" color="#000"/> <span style={{ fontSize: '11px' }}>(+562) 654 3901</span></td>
                                                        <td style={{ fontSize: '11px' }}><Ionicon icon="ion-ios-email-outline" fontSize="16px" color="#000"/> hdesk@providencia.cl</td>
                                                    </tr> 
                                                    <tr>
                                                        <td style={{ fontSize: '11px' }}><Ionicon icon="ion-ios-telephone-outline" fontSize="16px" color="#000"/> <span style={{ fontSize: '11px' }}>(+562) 654 3901</span></td>
                                                        <td style={{ fontSize: '11px' }}><Ionicon icon="ion-ios-email-outline" fontSize="16px" color="#000"/> hdesk@providencia.cl</td>
                                                    </tr> 
                                                    <tr>
                                                        <td style={{ fontSize: '11px' }}><Ionicon icon="ion-ios-telephone-outline" fontSize="16px" color="#000"/> <span style={{ fontSize: '11px' }}>(+562) 654 3901</span></td>
                                                        <td style={{ fontSize: '11px' }}><Ionicon icon="ion-ios-email-outline" fontSize="16px" color="#000"/> hdesk@providencia.cl</td>
                                                    </tr>  
                                                </table>
                                            </article>
                                        </div>
                                        <div className="tile is-parent">
                                            <article className="tile is-child box notification">
                                                <p className="title">Servicios Generales</p>
                                                <table className="table">
                                                    <tr>
                                                        <td><Ionicon icon="ion-ios-telephone-outline" color="#000"/> (+562) 654 3900</td>
                                                        <td><Ionicon icon="ion-ios-email-outline" color="#000"/> hdesk@providencia.cl</td>
                                                    </tr> 
                                                    <tr>
                                                        <td><Ionicon icon="ion-ios-telephone-outline" color="#000"/> (+562) 654 3900</td>
                                                        <td><Ionicon icon="ion-ios-email-outline" color="#000"/> hdesk@providencia.cl</td>
                                                    </tr> 
                                                    <tr>
                                                        <td><Ionicon icon="ion-ios-telephone-outline" color="#000"/> (+562) 654 3900</td>
                                                        <td><Ionicon icon="ion-ios-email-outline" color="#000"/> hdesk@providencia.cl</td>
                                                    </tr>  
                                                </table>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            
                            

                            
                            </div>
                            {direcciones.map(x =>
                                <div className="tile">
                                    <div className="tile">
                                        <div className="tile is-parent">
                                            <article className="tile is-child notification is-warning">
                                                <p className="title">
                                                    <Ionicon icon="ion-ios-location" fontSize="25px" color="rgb(125, 176, 24)"/>
                                                    <Ionicon icon="ion-ios-people" fontSize="25px" color="rgb(125, 176, 24)"/>
                                                    {x.abrev}
                                                </p>
                                                <p className="subtitle">{x.nombre}</p>
                                            </article>
                                        </div>
                                        <div className="tile is-parent">
                                            <article className="tile is-child notification is-warning">
                                                <p className="title">{x.abrev}</p>
                                                <p className="subtitle">{x.nombre}</p>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    
                    </div>

  </div>
                </section>
        </div>
        )
    }
}

export default Directorio;