import leftImage from "../images/hero/leftImage.jpg";
import rightImage from "../images/hero/rightImage.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__content-part">
            <img src={leftImage} alt="Тістечко Шу" />
          </div>
          <div className="hero__content-part">
            <div>
              Київське кондитерське виробництво 'Sweet Village' працює з 2015
              року та відкрите для співпраці з кав'ярнями, магазинами,
              ресторанами тощо. Ми працюємо тільки з натуральними інгредієнтами,
              Не використовуємо консерванти, ароматизатори та не збільшуємо
              штучно термін придатності десертів. Надаємо великий вибір нашим
              партнерам, оновлюємо асортимент, підтримуємо
              різноманітність.Висока якість продукту та приємні оптові ціни.
            </div>
          </div>
          <div className="hero__content-part">
            <img src={rightImage} alt="Трайфли" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
