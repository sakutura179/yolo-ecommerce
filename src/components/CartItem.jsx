import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import currencyFormat from '../utils/currencyFormat'

const CartItem = props => {
    // item la product duoc truyen vao tu component cha
    const [item, setItem] = React.useState(props.item);
    const [quantity, setQuantity] = React.useState(props.item.quantity);

    React.useEffect(() => {
        setItem(props.item);
        setQuantity(props.item.quantity);
    }, [props])

    const updateQuantity = (type) => {
        if (type === '+') {
            setQuantity(quantity + 1);
        }
        else
            setQuantity(quantity - 1 === 0 ? 1 : quantity - 1);
    }

    const removeItem = () => {
        console.log('remove item');
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