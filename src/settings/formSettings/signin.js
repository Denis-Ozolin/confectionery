import * as yup from "yup";

const defaultValues = {
  email: "",
  password: "",
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Невірно вказана електронна пошта")
    .required("Введіть будь-ласка електронну пошту"),
  password: yup
    .string()
    .min(4, "Має бути не меньше 4 символів")
    .max(16, "Має бути не більше 16 символів")
    .required("Введіть будь-ласка пароль"),
});

const formOptions = [
  {
    name: "email",
    label: "Email-адреса",
    type: "email",
  },
  {
    name: "password",
    label: "Пароль",
    type: "",
  },
];

export { defaultValues, schema, formOptions };
