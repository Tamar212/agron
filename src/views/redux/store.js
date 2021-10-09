import {createStore,combineReducers, applyMiddleware } from 'redux'
import employee from './reducers/emploeeyReducer'
import {crud} from './middleWares/middleWare'


const reducer = combineReducers({employee})
const store = createStore(reducer,applyMiddleware(crud))


window.store = store
export default store