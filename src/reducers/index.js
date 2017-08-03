import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

//Reducer
import funcionarios from './funcionarios'
import direcciones from './direcciones'


const rootReducers = combineReducers({
    func: funcionarios,
    dir: direcciones,
    router: routerReducer
  })


export default rootReducers

