import * as yup from "yup";

const numberRefExp =
  // eslint-disable-next-line no-useless-escape
  /(?:\w)(?:(?:(?:(?:\+?3)?8\W{0,5})?0\W{0,5})?[34569]\s?\d[^\w,;(\+]{0,5})?\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d(?!(\W?\d))/;

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  shopName: "",
  address: "",
  schedule: "",
  companyName: "",
  password: "",
  confirmPassword: "",
};

const schema = yup.object().shape({
  name: yup
    .string()
    .max(50, "Має бути не більше 50 символів")
    .required("Введіть будь-ласка ПІБ"),
  email: yup
    .string()
    .email("Невірно вказана електронна пошта")
    .required("Введіть будь-ласка електронну пошту"),
  phone: yup
    .string()
    .matches(numberRefExp, "Невірний формат номера")
    .required("Введіть будь-ласка номер телефону"),
  shopName: yup
    .string()
    .max(30, "Має бути не більше 30 символів")
    .required("Введіть будь-ласка назву закладу"),
  address: yup.string().required("Введіть будь-ласка адресу закладу"),
  schedule: yup.string().required("Введіть будь-ласка графік роботи"),
  companyName: yup.string().required("Введіть будь-ласка назву ФОП"),
  password: yup
    .string()
    .min(4, "Має бути не меньше 4 символів")
    .max(16, "Має бути не більше 16 символів")
    .required("Введіть будь-ласка пароль"),
  confirmPassword: yup
    .string()
    .min(4, "Має бути не меньше 4 символів")
    .max(16, "Має бути не більше 16 символів")
    .oneOf([yup.ref("password")], "Пароль не співпадає")
    .required("Введіть будь-ласка пароль"),
});

const formOptions = [
  {
    name: "name",
    label: "ПІБ",
    type: "text",
  },
  {
    name: "email",
    label: "Email-адреса",
    type: "email",
  },
  {
    name: "phone",
    label: "Телефон",
    type: "tel",
  },
  {
    name: "shopName",
    label: "Назва закладу",
    type: "text",
  },
  {
    name: "address",
    label: "Адреса закладу",
    type: "text",
  },
  {
    name: "schedule",
    label: "Графік роботи",
    type: "text",
  },
  {
    name: "companyName",
    label: "Назва ФОП",
    type: "text",
  },
  {
    name: "password",
    label: "Пароль",
    type: "",
  },
  {
    name: "confirmPassword",
    label: "Повторити пароль",
    type: "",
  },
];

export { defaultValues, schema, formOptions };
