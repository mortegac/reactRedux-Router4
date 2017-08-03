import React, {Component} from 'react';
import './tree.css';


class Tree extends Component {
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
    // const items = direcciones.map((c) => <MenuItem value={c.id} key={c.id} primaryText={`${c.nombre}`} />)
/*


          

            <li><a href="#">uno</a>
                <ul>
                    <li><a href="#">A</a></li>
                    <li><a href="#">B</a></li>
                    <li><a href="#">C</a></li>
                </ul>
            </li>
            <li><a href="#">dos</a></li>
            <li><a href="#">tres</a></li>
*/

    return (
        <ul className="tree">
         {direcciones.map(x =>
            <li key={x.id}>
                <a href="#">{x.abrev}</a> 
                <br/><span>{x.nombre}</span>
            </li>)}
        </ul>       
    )
  }
}

export default Tree;
