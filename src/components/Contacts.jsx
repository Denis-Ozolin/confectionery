import { Map } from '../components'

function Contacts() {
  return (
    <section id='contacts' className='contacts'>
      <div className="contacts__container">
        <h3 className='contacts__title'>Контакти</h3>
        <p>Наш магазин - кав'ярня Київська область,
          ЖК Петрівський Квартал вулиця Лесі Українки, 6Б, Святопетрівське.
        </p>
        <p>Виробництво Софіївська Борщагівка ЖК Львівський Маєток проспект Героїв Небесної сотні 36
        </p>
        <p>
          Телефон для замовлень та питань співпраці <a href='tel:+380933779900'>093-377-99-00</a>
        </p>
        <p>
          Email: <a href='mailto:sweetvillage@ukr.net'>sweetvillage@ukr.net</a>
        </p>
      </div>
      <Map/>
    </section>
  )
}

export default Contacts