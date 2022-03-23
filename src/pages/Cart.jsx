import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import Button from '../components/Button'
import CartItem from '../components/CartItem'

import productData from '../assets/fake-data/products'
import currencyFormat from '../utils/currencyFormat'

const Cart = () => {
    // su dung useMemo de tranh viec tinh toan lai localCart khi re-render
    // depen la rong => chi tinh toan lai 1 lan duy nhat
    const localCart = React.useMemo(() => {
        return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    }, [])

    const [cart, setCart] = React.useState([])

    const [totalProduct, setTotalProduct] = React.useState(0)
    const [totalPrice, setTotalPrice] = React.useState(0)

    React.useEffect(() => {
        setCart(productData.getCartItemsInfo(localCart))
        setTotalProduct(localCart.reduce((total, item) => total + Number(item.quantity), 0))
        setTotalPrice(localCart.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
    }, [localCart])

    return (
        <Helmet title='Giỏ hàng'>
            <div className='cart'>
                <div className='cart__info'>
                    <div className='cart__info__txt'>
                        <p>
                            Bạn đang có {totalProduct} sản phẩm trong giỏ hàng
                        </p>
                        <div className='cart__info__txt__price'>
                            <span>Thành tiền</span>
                            <span>{currencyFormat(totalPrice)}</span>
                        </div>
                    </div>
                    <div className='cart__info__btn'>
                        <Button size='block' onClick={() => window.location.reload()}>
                            cập nhật đơn hàng
                        </Button>
                        <Link to={cart.length !== 0 ? '/checkout' : '/'}>
                            <Button size='block'>đặt hàng</Button>
                        </Link>
                        <Link to='/catalog'>
                            <Button size='block'>tiếp tục mua hàng</Button>
                        </Link>
                    </div>
                </div>
                <div className='cart__list'>
                    {
                        cart.map((item, index) => (
                            <CartItem item={item} key={index} />
                        ))
                    }
                </div>
            </div>
        </Helmet>
    )
}

export default Cart