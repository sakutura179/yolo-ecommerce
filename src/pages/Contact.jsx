import React from 'react'

import Helmet from '../components/Helmet'
import Grid from '../components/Grid'

const contactContent = [
    {
        'title': 'Địa chỉ chúng tôi',
        'content': 'Số 12, Đường số 12, Quận Ninh Kiều, TP. Cần Thơ'
    },
    {
        'title': 'Email chúng tôi',
        'content': 'yolo@liamg.com'
    },
    {
        'title': 'Điện thoại',
        'content': '0909.121.218'
    },
    {
        'title': 'Thời gian làm việc',
        'content': '21:00 ~ 9:00 mỗi ngày'
    },
]

const Contact = () => {
    return (
        <Helmet title='Liên hệ'>
            <Grid
                col={2}
                mdCol={1}
                smCol={1}
                gap={20}
            >
                <div className='map-iframe'>
                    <iframe title="store-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62860.63914868832!2d105.72255074897778!3d10.034185113830706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0629f6de3edb7%3A0x527f09dbfb20b659!2zQ-G6p24gVGjGoSwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqE!5e0!3m2!1svi!2s!4v1647933869104!5m2!1svi!2s" allowFullScreen={true} loading="lazy"></iframe>
                </div>
                <div className='contact'>
                    <div className='contact__title'>
                        liên hệ
                    </div>
                    <div className='contact__content'>
                        {
                            contactContent.map((item, index) => (
                                <div key={index} className='contact__content__item'>
                                    <div className='contact__content__item__title'>
                                        {item.title}
                                    </div>
                                    <div className='contact__content__item__content'>
                                        {item.content}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Grid>
        </Helmet>
    )
}

export default Contact