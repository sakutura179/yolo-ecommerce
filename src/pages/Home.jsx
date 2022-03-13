import React from 'react'

import Helmet from '../components/Helmet'
import Slider from '../components/Slider'
import Grid from '../components/Grid'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import PolicyCart from '../components/PolicyCart'

import sliderData from '../assets/fake-data/slider'
import policy from '../assets/fake-data/policy'
import { Link } from 'react-router-dom'


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
            {/* Policy section */}
            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            policy.map((item, index) => (
                                <Link to="/policy" key={index}>
                                    <PolicyCart
                                        name={item.name}
                                        description={item.description}
                                        icon={item.icon}
                                    />
                                </Link>
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* End Policy section */}
        </Helmet>
    )
}

export default Home