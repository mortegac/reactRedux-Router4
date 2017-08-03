import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HeaderMenu extends Component {
  render () {
    return (
        <div>
            <span id="nav-toggle" className="nav-toggle"><span></span><span></span><span></span></span>

            <div id="nav-menu" className="nav-right nav-menu">
                <Link to='/reducer' className="nav-item ">Reducer</Link>
                <Link to='/direcciones' className="nav-item ">Direcciones</Link>
                <Link to='/directorio' className="nav-item ">Directorio</Link>
                <a href="http://intranet2.providencia.cl/" className="nav-item " target="_blank">Intranet</a>
            </div>
        </div>
    )
  }
}

export default HeaderMenu;
