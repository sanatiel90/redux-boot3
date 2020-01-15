import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from './../../assets/images/logo.svg'
import { Container, Cart } from './styles';
import { MdShoppingBasket } from 'react-icons/md'

function Header({ cartSize }) {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="RocketShoes" />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{cartSize} itens</span>
                </div>
                <MdShoppingBasket size={36} color="#fff" />
            </Cart>
        </Container>
    );
}

export default connect(state => ({
    cartSize: state.cart.length
}))(Header)