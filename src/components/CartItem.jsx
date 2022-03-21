import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import currencyFormat from '../utils/currencyFormat'

const CartItem = props => {
    // item la product duoc truyen vao tu component cha
    const [item, setItem] = React.useState(props.item)
    const [quantity, setQuantity] = React.useState(props.item.quantity)

    React.useEffect(() => {
        setItem(props.item)
        setQuantity(props.item.quantity)
    }, [props])

    const addToLocal = (newQuantity) => {
        let cart = localStorage.getItem('cart')
        if (cart) {
            cart = JSON.parse(cart)

            let tmp = cart.findIndex(value => value.id === item.id && value.color === item.color && value.size === item.size)

            if (tmp !== -1)
                cart[tmp].quantity = newQuantity

            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }

    const updateQuantity = (type) => {
        let newQuantity = quantity
        if (type === '+') {
            setQuantity(newQuantity + 1)
            addToLocal(newQuantity + 1)
        }
        else {
            newQuantity = quantity - 1 === 0 ? 1 : quantity - 1
            setQuantity(newQuantity)
            addToLocal(newQuantity)
        }
    }

    const removeItem = () => {
        let cart = localStorage.getItem('cart')
        if (cart) {
            cart = JSON.parse(cart)

            let newCart = cart.filter(value => value.id !== item.id || value.color !== item.color || value.size !== item.size)

            localStorage.setItem('cart', JSON.stringify(newCart))

            window.location.reload()
        }
    }

    return (
        <div className='cart__item'>
            <div className='cart__item__image'>
                <img src={item.product.image01} alt='' />
            </div>
            <div className='cart__item__info'>
                <div className='cart__item__info__name'>
                    <Link to={`/catalog/${item.slug}`}>
                        {`${item.product.title} - ${item.color} - ${item.size}`}
                    </Link>
                </div>
                <div className='cart__item__info__price'>
                    {currencyFormat(item.price)}
                </div>
                <div className='cart__item__info__quantity'>
                    {/* copy tu ProductView sang (scss se duoc giu nguyen) */}
                    <div className='product__info__item__quantity'>
                        <div
                            className='product__info__item__quantity__btn'
                            onClick={() => updateQuantity('-')}
                        >
                            <i className='bx bx-minus'></i>
                        </div>
                        <div className='product__info__item__quantity__input'>
                            {quantity}
                        </div>
                        <div
                            className='product__info__item__quantity__btn'
                            onClick={() => updateQuantity('+')}
                        >
                            <i className='bx bx-plus'></i>
                        </div>
                    </div>
                </div>
                <div className='cart__item__info__del'>
                    <i className='bx bx-trash' onClick={() => removeItem()}></i>
                </div>
            </div>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.object
}

export default CartItem