import { all } from "redux-saga/effects";

//lista de sagas
import cart from './cart/sagas'

//funcao para combinar varios sagas
export default function* sagaRoot() {
    return yield all([
        cart
    ])
}