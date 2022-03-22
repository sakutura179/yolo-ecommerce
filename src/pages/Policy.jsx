import React from 'react'

import Helmet from '../components/Helmet'

const policyContent = [
    {
        'title': 'Chính sách đổi trả',
        'content': '<p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus.Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus.Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus.</p><p>- Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus. Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus. Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus. Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus.</p>'
    },
    {
        'title': 'Chính sách hoàn tiền',
        'content': '<p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus.Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus.Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus.</p><p>- Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus. Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus. Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus. Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus.</p>'
    },
    {
        'title': 'Chính sách bảo hành',
        'content': '<p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus.Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus.Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus.</p><p>- Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus. Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus. Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus. Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus.</p>'
    },
    {
        'title': 'Khách hàng VIP',
        'content': '<p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus.Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus.Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus.</p><p>- Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus. Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus. Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus. Sed euismod, urna eu tincidunt consectetur, nisi nunc malesuada urna, eget tincidunt nisl nunc eget purus.</p>'
    }
]

const Policy = () => {
    return (
        <Helmet title='Chính sách'>
            <div className='policy'>
                {
                    policyContent.map((item, index) => (
                        <div key={index} className='policy__item'>
                            <div className='policy__item__title'>
                                {item.title}
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: item.content }} className='policy__item__content'>

                            </div>
                        </div>
                    ))
                }
            </div>
        </Helmet>
    )
}

export default Policy