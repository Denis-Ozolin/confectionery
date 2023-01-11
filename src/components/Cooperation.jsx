import { Form } from ".";

import { defaultValues, schema, formOptions } from "../settings/form/signup";

function Cooperation() {
  return (
    <section className="cooperation">
      <div className="cooperation__container">
        <h3 className="cooperation__title">Співпраця</h3>
        <div className="cooperation__body">
          <div className="cooperation__content">
            <p className="cooperation__text">
              Якщо Ви бажаєте стати нашим партнером, заповніть, будь-ласка,
              форму реєстрації.
            </p>
            <p className="cooperation__text">
              Ви отримаєте доступ до нашого сайту, як партнер
            </p>
            <p className="cooperation__text">
              та зможете оформлювати замовлення через кошик та бачити спеціальні
              ціни, які ми пропонуємо для співпраці.
            </p>
            <p className="cooperation__text">
              Дякуємо за увагу! Будемо щасливі працювати з Вами!
            </p>
          </div>
          <div className="cooperation__form">
            <Form
              defaultValues={defaultValues}
              schema={schema}
              formOptions={formOptions}
              submitText="Зареєструватись"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cooperation;
