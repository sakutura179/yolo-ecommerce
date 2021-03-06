import React from 'react'
import { Link } from 'react-router-dom'

import Grid from './Grid'
import logo from '../assets/images/Logo-2.png'

// fake data footer
const footerAbout = [
    {
        display: "Giới thiệu",
        path: '/about'
    },
    {
        display: "Liên hệ",
        path: '/contact'
    }
]

const footerCustomer = [
    {
        display: "Chính sách đổi trả",
        path: '/policy'
    },
    {
        display: "Chính sách hoàn tiền",
        path: '/policy'
    },
    {
        display: "Chính sách bảo hành",
        path: '/policy'
    }
]

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        {/* Moi phan tu trong grid */}
                        <div className='footer__title'>
                            Tổng đài hỗ trợ
                        </div>
                        <div className='footer__content'>
                            <p>
                                Liên hệ đặt hàng <strong>0123456789</strong>
                            </p>
                            <p>
                                Thắc mắc đơn hàng <strong>0123456789</strong>
                            </p>
                            <p>
                                Góp ý, kiếu nại <strong>0123456789</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='footer__title'>
                            Về YOLO
                        </div>
                        <div className='footer__content'>
                            {
                                footerAbout.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className='footer__title'>
                            Chăm sóc khách hàng
                        </div>
                        <div className='footer__content'>
                            {
                                footerCustomer.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className='footer__about'>
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt='' />
                            </Link>
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nunc malesuada nisi, euismod consectetur nisi nunc euismod.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer