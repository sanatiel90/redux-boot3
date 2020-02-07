/*function* - é um GENERATOR do javascript, responsavel por fazer requisicoes assincronas; funciona como o ASYNC/AWAIT, mas é bem mais poderoso
///SAGA usa GENERATOR pra fazer requisicao assincrona; saga recebe a action como parametro (nesse caso a action foi desestruturada para pegar apenas o param 'id'
//no GENERATOR, o 'await' é trocado pelo 'yield'; além disso, no SAGA nao se pode fazer a chamada assincrona diretamente com api.get(); precisa-se usar o metodo 'call' do redux-saga/effects, informando como primeiro param a funcao q vai ser chamada, e como segundo param o parametro q será passado nessa funcao chamada;
//call() é um metodo responsavel por fazer chamadas assincronas que retornam Promises do JS (o api.get() do axios é um exemplo)
*/

import { call, put, all, takeLatest, select } from "redux-saga/effects";
import history from './../../../services/history'
import api from './../../../services/api'
import { addToCartSuccess, updateAmountSuccess } from "./actions";
import { formatPrice } from './../../../util/format'
import { toast } from "react-toastify";

function* addToCart({ id }) {

    //select() busca informacoes dentro do estado da app; vai buscar se ja existe produto com esse id
    const productExists = yield select(state =>
        state.cart.find(p => p.id === id)
    )

    const stock = yield call(api.get, `/stock/${id}`)

    const stockAmount = stock.data.amount
    const currentAmount = productExists ? productExists.amount : 0

    const amount = currentAmount + 1

    if (amount > stockAmount) {
        toast.error('Quantidade não disponível no estoque')
        return
    }

    if (productExists) {
        const amount = productExists.amount + 1

        yield put(updateAmountSuccess(id, amount))
    } else {
        const response = yield call(api.get, `/products/${id}`)

        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price)
        }

        //put() do saga dispara uma action
        yield put(addToCartSuccess(data))

        //redireciona para uma rota
        history.push('/cart')
    }
}


function* updateAmount({ id, amount }) {
    if (amount <= 0) return;

    const stock = yield call(api.get, `stock/${id}`)
    const stockAmount = stock.data.amount

    //se for tentado colocar pra zero, nao deixar
    if (amount > stockAmount) {
        toast.error('Quantidade não disponível no estoque')
        return
    }

    yield put(updateAmountSuccess(id, amount))
}

//all() junta varios sagas
export default all([
    //takeLatest() pega apenas a ultima requisicao feita numa sequencia de cliques;
    //1º param: qual action deseja ouvir; 2º param qual funcao deseja disparar ao ouvir essa action
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount)

])