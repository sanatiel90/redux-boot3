//aqui ficam todas as actions do reducer cart

//para adicionar produtos terão 2 actions: @cart/ADD_REQUEST, q é ouvida apenas pelo saga e faz requisicao à api (lembre-se q um reducer nao pode diretamente realizar chamadas assincronas à apis ou bds)
//e @cart/ADD_SUCCESS, que vai ser ouvida pelo reducer e já vai possuir o resultado da requisicao a à api
export function addToCartRequest(id) {
    return {
        type: '@cart/ADD_REQUEST',
        id
    }
}


export function addToCartSuccess(product) {
    return {
        type: '@cart/ADD_SUCCESS',
        product
    }
}


export function removeFromCart(id) {
    return {
        type: '@cart/REMOVE',
        id
    }
}

export function updateAmountRequest(id, amount) {
    return {
        type: '@cart/UPDATE_AMOUNT_REQUEST',
        id,
        amount
    }
}

export function updateAmountSuccess(id, amount) {
    return {
        type: '@cart/UPDATE_AMOUNT_SUCCESS',
        id,
        amount
    }
}