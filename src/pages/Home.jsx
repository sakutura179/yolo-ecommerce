import React from 'react'

import Helmet from '../components/Helmet'
import Slider from '../components/Slider'
import sliderData from '../assets/fake-data/slider'

const Home = () => {
    return (
        <Helmet title='Trang chủ'>
            {/* Slider */}
            <Slider
                data={sliderData}
                control={true}
                auto={false}
            />
            {/* End slider */}
        </Helmet>
    )
}

export default Home