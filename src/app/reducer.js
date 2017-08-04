import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
//Reducer
import post from '../pages/post/reducer'


const rootReducers = combineReducers({
    posts: post,
    router: routerReducer,
    form: formReducer,
  })


export default rootReducers

