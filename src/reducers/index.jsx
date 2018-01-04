import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  //auth: require('./auth').default,
  house: require('../reducers/house').default,
  form: formReducer
})

export default rootReducer