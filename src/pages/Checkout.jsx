import React from 'react'

import Helmet from '../components/Helmet'
import Button from '../components/Button'

import productData from '../assets/fake-data/products'
import CheckoutCartItem from '../components/CheckoutCartItem'

const Checkout = () => {
    const localCart = React.useMemo(() => {
        return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    }, [])

    const [cart, setCart] = React.useState([])

    const [totalProduct, setTotalProduct] = React.useState(0)
    const [totalPrice, setTotalPrice] = React.useState(0)

    const initUserInformation = {
        name: '',
        birthDay: '',
        address: '',
        phone: ''
    }
    const [userInformation, setUserInformation] = React.useState(initUserInformation)

    React.useEffect(() => {
        setCart(productData.getCartItemsInfo(localCart))
        setTotalProduct(localCart.reduce((total, item) => total + Number(item.quantity), 0))
        setTotalPrice(localCart.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
    }, [localCart])

    const check = () => {
        if (userInformation.name === '') {
            alert('Vui lòng nhập tên')
            return false
        }
        if (userInformation.birthDay === '') {
            alert('Vui lòng nhập ngày sinh')
            return false
        }
        if (userInformation.address === '') {
            alert('Vui lòng nhập địa chỉ')
            return false
        }
        if (userInformation.phone === '') {
            alert('Vui lòng nhập số điện thoại')
            return false
        }
        return true
    }

    const handleCheckout = () => {
        if (cart.length !== 0) {
            if (check()) {
                localStorage.removeItem('cart')
                setCart([])
                setTotalProduct(0)
                setTotalPrice(0)
                console.log({
                    userInformation,
                    cart,
                    price: totalPrice
                })
                alert('Đặt hàng thành công')
                // redirect to home page
                window.location.href = '/'
            }
        } else {
            alert('Giỏ hàng trống')
            return
        }
    }

    return (
        <Helmet title='Thanh toán'>
            <div className='checkout'>
                <div className='checkout__form'>
                    <div className='checkout__form__title'>Thông tin đặt hàng</div>
                    <div className='checkout__form__item'>
                        <label className='checkout__form__item__label' htmlFor='name'>họ và tên</label>
                        <input
                            type={'text'}
                            name={'name'}
                            id={'name'}
                            value={userInformation.name}
                            onChange={(e) => setUserInformation({ ...userInformation, name: e.target.value })}
                        />
                    </div>
                    <div className='checkout__form__item'>
                        <label className='checkout__form__item__label' htmlFor='birthDay'>ngày sinh</label>
                        <input
                            type={'date'}
                            name={'birthDay'}
                            id={'birthDay'}
                            value={userInformation.birthDay}
                            onChange={(e) => setUserInformation({ ...userInformation, birthDay: e.target.value })}
                        />
                    </div>
                    <div className='checkout__form__item'>
                        <label className='checkout__form__item__label' htmlFor='address'>địa chỉ</label>
                        <input
                            type={'text'}
                            name={'address'}
                            id={'address'}
                            value={userInformation.address}
                            onChange={(e) => setUserInformation({ ...userInformation, address: e.target.value })}
                        />
                    </div>
                    <div className='checkout__form__item'>
                        <label className='checkout__form__item__label' htmlFor='phone'>số điện thoại</label>
                        <input
                            type={'text'}
                            name={'phone'}
                            id={'phone'}
                            value={userInformation.phone}
                            onChange={(e) => setUserInformation({ ...userInformation, phone: e.target.value })}
                        />
                    </div>
                    <div className='checkout__form__item'>
                        <Button
                            size='block'
                            onClick={() => handleCheckout()}
                        >
                            đặt hàng
                        </Button>
                    </div>
                </div>
                <div className='checkout__list'>
                    <CheckoutCartItem
                        cart={cart}
                        totalProduct={totalProduct}
                        totalPrice={totalPrice}
                    />
                </div>
            </div>
        </Helmet>
    )
}

export default Checkout