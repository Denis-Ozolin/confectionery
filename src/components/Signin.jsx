import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Form, SmallButton, ButtonIcon } from "../components";
import { defaultValues, schema, formOptions } from "../settings/form/signin";
import { toggleLogged } from "../redux/auth/auth-slice";

function Signin({ closeModal }) {
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(toggleLogged());
    closeModal();
  };

  return (
    <div className="signin">
      <div className="signin__out">
        <SmallButton onClick={closeModal}>
          <ButtonIcon id="close" />
        </SmallButton>
      </div>
      <Form
        defaultValues={defaultValues}
        schema={schema}
        formOptions={formOptions}
        submitText="Увійти"
        handleSubmit={onSubmit}
      />
      <div className="signin__settings">
        <NavLink
          onClick={closeModal}
          to="/cooperation"
          className="signin__link"
        >
          Зареєструватись
        </NavLink>
        <a href="_" className="signin__link">
          Забули пароль?
        </a>
      </div>
    </div>
  );
}

export default Signin;
