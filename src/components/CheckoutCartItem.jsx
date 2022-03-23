import React from 'react'
import PropTypes from 'prop-types'

import currencyFormat from '../utils/currencyFormat'

const CheckoutCartItem = props => {
    const cart = props.cart
    const totalProduct = props.totalProduct
    const totalPrice = props.totalPrice

    return (
        <div className='checkout__list__cart-item'>
            <div className='checkout__list__cart-item__item title'>
                Bạn có {totalProduct} sản phẩm trong giỏ hàng
            </div>
            <div className='checkout__list__cart-item__item'>
                <div className='checkout__list__cart-item__item__info-title'>
                    Thông tin sản phẩm
                </div>
                <div className='checkout__list__cart-item__item__price-title'>
                    <span>Số lượng</span>
                    <span>Tổng tiền</span>
                </div>
            </div>
            {
                cart.map((item, index) => (
                    <div key={index}
                        className='checkout__list__cart-item__item'>
                        <div className='checkout__list__cart-item__item__info'>
                            {item.product.title} - {item.color} - {item.size}
                        </div>
                        <div className='checkout__list__cart-item__item__price'>
                            <span>{item.quantity}</span>
                            <span>
                                {currencyFormat(Number(item.quantity) * Number(item.price))}
                            </span>
                        </div>
                    </div>
                ))
            }
            <div className='checkout__list__cart-item__item title'>
                <span>Thành tiền</span>
                <span>{currencyFormat(totalPrice)}</span>
            </div>
        </div>
    )
}

CheckoutCartItem.propTypes = {
    cart: PropTypes.array.isRequired,
    totalProduct: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
}

export default CheckoutCartItem