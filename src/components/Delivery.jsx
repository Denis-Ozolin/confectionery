import React from 'react'

import deliveryImage from '../images/delivery.png'

function Delivery() {
  return (
    <section id='delivery' className='delivery'>
      <div className="delivery__container">
        <h3 className='delivery__title'>Доставка для партнерів «Sweet Village»</h3>
            <p className='delivery__info'>Доставляємо заздалегідь оформлені замовлення для Ваших кав'ярень, магазинів тощо.</p>
            <p className='delivery__days'>Дні доставлення - Понеділок, Середа, П'ятниця.</p>
            <p className='delivery__price'>Вартість доставки у межах Києва - 100 грн точка, при мінімальному замовленні від 800 грн.</p>
        <div className='delivery'>
          <div className='delivery__content'>
            <p>Постачання відбувається у першій половині дня.</p>
            <p className='delivery__condition'>При замовленні менше ніж на 800 грн, можливий самовивіз за адресою </p>
            <a className='delivery__link' href='_'>Софіївська Борщагівка ЖК Львівський Маєток проспект Героїв Небесної сотні 36</a>
          </div>
          <div className='delivery__image'>
            <img src={deliveryImage} alt="delivery" className='delivery__icon'/>
          </div>
        </div>
        <p className='text'>Також можлива доставка у такі райони та найближчі міста:</p>
        {/* <ul className='city__list'>
          <li>Софіївська та Петропавлівська Борщагівка</li>
          <li>Вишневе</li>
          <li>Боярка</li>
        </ul> */}
        <p className='text italic'>Софіївська та Петропавлівська Борщагівка,</p>
        <p className='text italic'>Вишневе та Боярка.</p>
        <a href='_' className='link'>Дізнатися більш детальну інформацію про умови співпраці</a>
      </div>
    </section>
  )
}

export default Delivery