import { combineReducers } from 'redux'
// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import funcionarios from './funcionarios'
import direcciones from './direcciones'

// export default {
//   funcionarios,
// }
//    router: routerReducer,



const rootReducers = combineReducers({
    func: funcionarios,
  })
  


export default rootReducers

