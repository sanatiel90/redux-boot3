import { combineReducers } from 'redux' //funcao para combinar varios reducers

//lista de reducers
import cart from './cart/reducer'

export default combineReducers({
    cart
})


