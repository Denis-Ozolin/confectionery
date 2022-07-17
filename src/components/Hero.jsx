import React from 'react'

import leftImage from '../images/hero/leftImage.jpg'
import message from '../images/hero/message.jpg'
import rightImage from '../images/hero/rightImage.jpg'


function Hero() {
  return (
    <section id='home' className='hero'>
      <div className='hero__container'>
          <ul className='hero__cardset'>
            <li className='hero__card'>
              <img src={leftImage} alt='Тістечко Шу' />
            </li>
            <li className='hero__card'>
              <img src={message} alt='Київське кондитирське виробництво' />
            </li>
            <li className='hero__card'>
              <img src={rightImage} alt='Трайфли' />
            </li>
          </ul>
      </div>
    </section>
  )
}

export default Hero