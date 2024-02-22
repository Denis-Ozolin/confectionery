import { useState } from "react";
import { useFormik } from "formik";

import { Button, SvgIcon } from "../components";

function Form({
  defaultValues,
  schema,
  formOptions,
  submitText,
  handleSubmit,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowingPassword = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: schema,
    onSubmit: (values) => {
      handleSubmit();
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} action="" className="form">
      {formOptions.map(({ name, label, type }) => (
        <div key={name} className="form__area">
          <label className="form__label" htmlFor={name}>
            {label}
            <span className="form__label--required">*</span>
          </label>
          <div className="form__field">
            <input
              onChange={formik.handleChange}
              value={formik.values[name]}
              name={name}
              id={name}
              className={
                type ? "form__input" : "form__input form__input--password"
              }
              type={!type ? (showPassword ? "text" : "password") : type}
            />
            {formik.errors[name] && (
              <p className="form__error-msg">{formik.errors[name]}</p>
            )}
            {!type ? (
              <div className="form__show-btn">
                <Button onClick={toggleShowingPassword} option="icon">
                  <SvgIcon id="lock" />
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      ))}
      <Button type="submit" title={submitText}>
        {submitText}
      </Button>
    </form>
  );
}

export default Form;
