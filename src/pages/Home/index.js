import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md'

import { connect } from 'react-redux' /*connect - conecta um componente com o redux;  */
import { bindActionCreators } from 'redux'

import { ProductList } from './styles';
import api from './../../services/api'
import { formatPrice } from './../../util/format'

import * as CartActions from './../../store/modules/cart/actions' //importando actions do reducer cart

class Home extends Component {

    state = {
        products: []
    }

    async componentDidMount() {
        const response = await api.get('products')

        //faz um map sobre a response e retorna um objeto, esse obj contento tudo o q product ja tem (...product) e add mais um campo
        //priceFormatted, q contem o valor do preço formatado
        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price)
        }))

        this.setState({
            products: data
        })
    }

    handleAddProduct = product => {
        /*todo componente que usa o connect tem acesso a uma propriedade chamada 'dispatch' que serve para disparar uma ACTION 
        (quando uma action é disparada, todos os reducers são ouvidos) */
        /* nesse caso a action addToCart foi repassada para as props do componente atraves do mapDispatchToProps com bindActionCreators usada no connect */
        const { addToCart } = this.props

        //dispatch recebe um type com a action a ser disparada e opcionalmente um objeto que vai modificar o state geral
        //nesse caso a action esta sendo acessada de CartActions
        //dispatch(CartActions.addToCart(product))

        //chamando a action
        addToCart(product)
    }

    render() {
        const { products } = this.state
        return (
            <ProductList>
                {products.map(product => (
                    <li>
                        <img
                            src={product.image}
                            alt={product.title} />

                        <strong>{product.title}</strong>
                        <span>{product.priceFormatted}</span>

                        <button type="button" onClick={() => this.handleAddProduct(product)}>
                            <div>
                                <MdAddShoppingCart size={16} color="#fff" />
                            </div>
                            <span>ADICIONAR AO CARRINHO</span>
                        </button>
                    </li>
                ))}
            </ProductList>
        );
    }
}

//mapDispatchToProps converte actions do redux em propriedades do component, fazendo com que as actions sejam acessiveis via props. no component
//o mapDispatchToProps recebe o dispatch(aquele msm q dispara as actions) e usa a funcao do redux bindActionCreators para usar 
//esse dispatch em um dado conjunto de actions (nesse caso, CartActions)
//o mapDispatchToProps deve ser passado como segunda funcao (parametro) do connect() do react-redux, pois a primeira funcao
//deve ser o mapStateToProps (se mapStateToProps nao for usado no componente, deve-se passar null no primeiro param) 
const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home)