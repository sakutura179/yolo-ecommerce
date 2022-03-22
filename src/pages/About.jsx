import React from 'react'

import Helmet from '../components/Helmet'

const About = () => {
    return (
        <Helmet title='Giới thiệu'>
            <div className='about'>
                <div className='about__title'>
                    về chúng tôi
                </div>
                <div className='about__content'>
                    <p className='about__content__item'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus. Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus. Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus.
                    </p>
                    <p className='about__content__item'>
                        Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus. Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus. Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus. Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus.
                    </p>
                    <p className='about__content__item'>
                        Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus. Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus. Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus. Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl n
                    </p>
                    <p className='about__content__slogan'>
                        Lorem ipsum - YOLO
                    </p>
                </div>
            </div>
        </Helmet>
    )
}

export default About