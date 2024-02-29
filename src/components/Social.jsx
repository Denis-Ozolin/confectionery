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
            <SvgIcon id="instagram" stroke="#902914" />
            <span>www.instagram.com/bakerysweetvillage</span>
          </a>
        </li>
        <li className="social__item">
          <a
            href="https://t.me/sweetvillage_kyiv"
            className="social__link"
            target="_blank"
            rel="noreferrer"
          >
            <SvgIcon id="telegram" stroke="#902914" />
            <span>t.me/sweetvillage_kyiv</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;
