import React from 'react'

import leftImage from '../images/hero/leftImage.jpg'
import message from '../images/hero/main.jpg'
import rightImage from '../images/hero/rightImage.jpg'


function Hero() {
  return (
    <section id='home' className='hero'>
      <div className='hero__container'>
        <div className='hero__content'>
          <div className='hero__image'>
            <img src={leftImage} alt='Тістечко Шу' />
          </div>
          <div className='hero__image'>
            <img src={message} alt='Київське кондитирське виробництво' />       
          </div>
          <div className='hero__image'>
            <img src={rightImage} alt='Трайфли' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero