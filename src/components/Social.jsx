import { SvgIcon } from "../components";

function Social() {
  return (
    <div className="social">
      <ul className="social__list">
        <li className="social__item">
          <a
            href="https://www.instagram.com/bakerysweetvillage/"
            className="social__link"
            target="_blank"
            rel="noreferrer"
          >
            <SvgIcon id="instagram" />
          </a>
        </li>
        <li className="social__item">
          <a
            href="https://t.me/sweetvillage_kyiv"
            className="social__link"
            target="_blank"
            rel="noreferrer"
          >
            <SvgIcon id="telegram" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;
