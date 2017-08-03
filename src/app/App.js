import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
// import {BrowserRouter as Router, Route} from 'react-router-dom'

//Pages
import Header       from '../pages/header'
import Directorio   from '../pages/directorio'
import Direcciones  from '../pages/direcciones'
import Novedades    from '../components/novedades/novedades'
import Footer       from '../pages/footer'

//Reducers
import Reducer      from '../pages/reducer'

//styles
import '../utils/bulma.css';
import '../utils/app.css';


class App extends Component {
  render() {
    const { funcionarios } = this.props
    console.log(this.props)

    return (
        <div className='App' >
            <Header />
            <Route exact path='/' component={Directorio} />
            <Route exact path='/reducer' component={Reducer}/>
           
            <Route exact path='/directorio' component={Directorio} />
             <Route exact path='/direcciones' component={Direcciones} />
            
            <Novedades></Novedades> 
            <Footer />
        </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    ...state,
  }
}



const mapDispatchToProps = dispatch => ({

  })

export default connect(mapStateToProps, mapDispatchToProps)(App)



