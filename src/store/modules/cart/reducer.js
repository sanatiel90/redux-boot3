/*reducer 'cart'
TODO reducer recebe como param uma prop 'state' que representa o estado daquele reducer antes de serem feitas as modificacoes, e 'action' que indica as actions
que foram ativadas; o reducer geralmente faz um switch na TYPE da action, para verificar se alguma das suas ACTIONS foram disparadas e assim fazer alguma coisa  
*/


import produce from 'immer'
export default function cart(state = [], action) {
    switch (action.type) {
        //action para add produto
        case '@cart/ADD_SUCCESS':
            //usando o produce do immer para tornar o state 'mutavel'
            return produce(state, draft => {
                const { product } = action

                draft.push(product)
                /**
                 * const productIndex = draft.findIndex(p => p.id === action.product.id)

                if (productIndex >= 0) {
                    draft[productIndex].amount += 1
                } else {
                    draft.push({
                        ...action.product,
                        amount: 1
                    })
                }
                 */
            });

        //action para remover produto    
        case '@cart/REMOVE':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id)

                if (productIndex >= 0) {
                    draft.splice(productIndex, 1)
                }
            });

        //action para atualizar quantidade; 
        case '@cart/UPDATE_AMOUNT_SUCCESS': {

            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id)

                if (productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount)
                }
            })
        }


        default:
            return state
    }

}

/*'produce' recebe como param o 'state', q é o estado antes da modificacao, e o 'draft' q é esse mesmo estado, mas em modo
de edição; com o draft podem ser feitas modificacoes no estado, como em draft[productIndex].amount += 1 ou  draft.push() ;
 essas alteracoes serao aplicadas no state */

/*return [
        ...state,
        {
            ...action.product,
            amount: 1
        }
    ]*/