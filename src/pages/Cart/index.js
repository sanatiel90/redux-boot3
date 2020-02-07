import React from 'react';
import { connect } from 'react-redux'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'
import { bindActionCreators } from 'redux'
import * as CartActions from './../../store/modules/cart/actions'
import { Container, ProductTable, Total } from './styles';
import { formatPrice } from '../../util/format';

//state cart e total acessiveis devido mapStateToProps
//actions removeFromCart e updateAmount devido mapDispatchToProps
function Cart({ cart, total, removeFromCart, updateAmountRequest }) {

    function increment(product) {
        updateAmountRequest(product.id, product.amount + 1)
    }

    function decrement(product) {
        updateAmountRequest(product.id, product.amount - 1)
    }

    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>

                <tbody>
                    {cart.map(product => (
                        <tr>
                            <td>
                                <img src={product.image} alt={product.title} />
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>{product.priceFormatted}</span>
                            </td>
                            <td>
                                <div>
                                    <button type="button" onClick={() => decrement(product)} >
                                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                                    </button>
                                    <input type="number" readOnly value={product.amount} />
                                    <button type="button" onClick={() => increment(product)} >
                                        <MdAddCircleOutline size={20} color="#7159c1" />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{product.subtotal}</strong>
                            </td>
                            <td>                                    {/*enviando action para remover produto a partir do id */}
                                <button type="button" onClick={() => removeFromCart(product.id)} >
                                    <MdDelete size={20} color="#7159c1" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar Pedido</button>

                <Total>
                    <span>TOTAL</span>
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
    );
}

//a funcao mapStateToProps é  passada como primeiro parametro do connect, q tem acesso ao state da aplicacao; mapStateToProps
//permite que o estado seja acessado no componente atraves das props
const mapStateToProps = state => ({
    //prop cart sera os proprios produtos presentes em cart, acrescidos de uma prop subtotal
    cart: state.cart.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount)
    })),
    //prop total usara a funcao reduce(), q percorre um array e cria um acumulador (total) com base nos valores percorridos do array
    //o parametro 0 indica o valor inicial de total
    total: formatPrice(
        state.cart.reduce((total, product) => {
            return total + product.price * product.amount
        }, 0)
    )
});

//a funcao mapDispatchToProps é passada como segundo param de connect, aplica o dispatch em um grupo de actions e os deixa acessiveis
//nas props to component
const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
