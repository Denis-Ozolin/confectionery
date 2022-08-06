import { Form } from "../components"

import { defaultValues, schema, formOptions } from '../settings/formSettings/signup'

function Cooperation() {
  return (
    <section className='cooperation'>
      <div className='cooperation__container'>
        <h3 className='cooperation__title'>Співпраця</h3>
        <div className='cooperation__body'>
          <div className='cooperation__form'>
            <Form defaultValues={defaultValues} schema={schema} formOptions={formOptions} submitText='Зареєструватись'/>
          </div>
          <div className='cooperation__content'>
            <p className='cooperation__text'>Київське кондитерське виробництво 'Sweet Village' працює з 2015 року та відкрите для співпраці з кав'ярнями, магазинами, ресторанами тощо.</p>
            <p className='cooperation__text'>Ми  працюємо тільки з натуральними інгредієнтами, Не використовуємо консерванти, ароматизатори та не збільшуємо штучно термін придатності десертів.</p>
            <p className='cooperation__text'>Надаємо великий вибір нашим партнерам, оновлюємо асортимент, підтримуємо різноманітність.</p>
            <p className='cooperation__text'>Висока якість продукту та приємні оптові ціни.</p>
            <p className='cooperation__text'>Якщо Ви хочете стати нашим партнером, заповніть, будь ласка, форму реєстрації.</p>
            <p className='cooperation__text'>Ви отримаєте доступ до нашого сайту, як партнер, зможете оформлювати замовлення через кошик та бачити спеціальні ціни, які ми пропонуємо для співпраці.</p>
            <p className='cooperation__text'>Дякуємо за увагу! Будемо щасливі працювати з Вами!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cooperation