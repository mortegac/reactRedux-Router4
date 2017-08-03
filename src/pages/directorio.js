import React, {Component} from 'react';
import Tree from '../components/tree/tree'
// import CardList from '../components/cardList/cardList'


  

class Directorio extends Component {
    render () {
    return (
            <div >
                <section className="section">
                    <div className="container">
                         <div className="tabs is-centered  is-small">
                            <ul>
                                <li className="is-active"><a>DIRECCIONES</a></li>
                                <li><a>A</a></li>
                                <li><a href="#">B</a></li>
                                <li><a>C</a></li>
                                <li><a>D</a></li>
                                <li><a>E</a></li>
                                <li><a>F</a></li>
                                <li><a>G</a></li>
                                <li><a>H</a></li>
                                <li><a>I</a></li>
                                <li><a>J</a></li>
                                <li><a>K</a></li>
                                <li><a>L</a></li>
                                <li><a>M</a></li>
                                <li><a>N</a></li>
                                <li><a>O</a></li>
                                <li><a>P</a></li>
                                <li><a>Q</a></li>
                                <li><a>R</a></li>
                                <li><a>S</a></li>
                                <li><a>T</a></li>
                                <li><a>U</a></li>
                                <li><a>V</a></li>
                                <li><a>W</a></li>
                                <li><a>X</a></li>
                                <li><a>Y</a></li>
                                <li><a>Z</a></li>
                            </ul>
                        </div>
                        <div className="columns is-desktop">
                            <div className="column is-one-quarter">
                                <nav className="panel">
                                    <p className="panel-heading">DIRECCIONES</p>
                                    <div className="panel-block">
                                        <p className="control has-icons-left">
                                            <input className="input is-small" type="text" placeholder="Buscar"/>
                                            <span className="icon is-small is-left"><i className="fa fa-search"></i></span>
                                        </p>
                                    </div>
                                    <div className="panel-block">
                                        <Tree></Tree>
                                    </div>
                                </nav>
                            </div>
                           
                            <div className="column">
         
                           
                            
                           
                            </div>

                     
                        </div>
                    </div>
                </section>
            </div>
    )
  }
}

export default Directorio;
