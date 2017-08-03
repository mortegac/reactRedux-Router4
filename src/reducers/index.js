import { combineReducers } from 'redux'
import funcionarios from './funcionarios'
import direcciones from './direcciones'

// export default {
//   funcionarios,
// }


const rootReducer = combineReducers({
  func: funcionarios,
})

export default rootReducer

