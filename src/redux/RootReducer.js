import { combineReducers } from 'redux'
import itemsReducer from './Visits'

const RootReducer = combineReducers({items:itemsReducer})

export default RootReducer
