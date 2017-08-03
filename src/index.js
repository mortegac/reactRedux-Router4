import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import rootReducers from './reducers/index'


import App from './app/App';
import registerServiceWorker from './registerServiceWorker';


const history = createHistory()                  // Create a history of your choosing (we're using a browser history in this case)

const middleware = routerMiddleware(history)    // Build the middleware for intercepting and dispatching navigation actions

/*
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

*/
// Add the reducer to your store on the `router` key.  Also apply our middleware for navigating
const store = createStore(
    rootReducers,
    applyMiddleware(middleware)
    
)




// let store = createStore(combineReducers({
//   ...reducers,
// }))

// ReactDOM.render(
//         <Provider store={store}>
//             <App />
//         </Provider>, document.getElementById('root')
//             );

// <Route exact path="/" component={Home}/>
// <Route path="/about" component={About}/>
// <Route path="/topics" component={Topics}/>
/*
<div>
        <div className='App layout-documentation page-grid' >
            <Header />
            <Route exact path='/' component={Directorio} />
            <Route exact path='/reducer' component={Reducer}/>
            <Route exact path='/directorio' component={Directorio} />
            <Route exact path='/direcciones' component={Direcciones} />
            <Novedades></Novedades> 
            <Footer />
        </div>


      </div>
*/        

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)


registerServiceWorker();
