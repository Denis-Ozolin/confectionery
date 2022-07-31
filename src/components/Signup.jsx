import { useFormik } from 'formik'
import * as yup from 'yup'

import { Button } from '../components'

function Signup() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      shopName: '',
      address: '',
      schedule: '',
      companyName: '',
      password: ''
    },
    validationSchema: yup.object({
      name: yup.string().required('Введіть будь-ласка ПІБ'),
      email: yup.string().required('Введіть будь-ласка електронну пошту'),
      phone: yup.string().required('Введіть будь-ласка номер телефону'),
      shopName: yup.string().required('Введіть будь-ласка назву закладу'),
      address: yup.string().required('Введіть будь-ласка адресу закладу'),
      schedule: yup.string().required('Введіть будь-ласка графік роботи'),
      companyName: yup.string().required('Введіть будь-ласка назву ФОП'),
      password: yup.string().required('Введіть будь-ласка пароль')
    }),
    onSubmit: (values) => {
      console.log(values);
    },
    // onChange: (value) => {
    //   console.log(value);
    // }
  })

  return (
    <form onSubmit={formik.handleSubmit} action='' className='form'>
      <div className='form__area'>
        <label className='form__label' htmlFor='name'>ПІБ 
          <span className='form__label--required'>*</span> 
        </label>
        <div className='form__field'>
          <input 
            onChange={formik.handleChange} 
            onBlure={formik.handleBlur} 
            value={formik.values.name}
            name='name' id='name'
            className='form__input'
            type='text'
          />
          {formik.touched.name && formik.errors.name? <p className='form__error-msg'>Невірно вказані данні</p>: null}
        </div>
      </div>
      <div className='form__area'>
        <label className='form__label' htmlFor='phone'>Email-адреса 
          <span className='form__label--required'>*</span> 
        </label>
        <div className='form__field'>
          <input 
            onChange={formik.handleChange} 
            onBlure={formik.handleBlur} 
            value={formik.values.email}
            name='email' id='email'
            className='form__input'
            type='email'
          />
          {formik.touched.email && formik.errors.email? <p className='form__error-msg'>Невірно вказані данні</p>: null}
        </div>
      </div>
      <div className='form__area'>
        <label className='form__label' htmlFor='phone'>Телефон 
          <span className='form__label--required'>*</span> 
        </label>
        <div className='form__field'>
          <input 
            onChange={formik.handleChange} 
            onBlure={formik.handleBlur} 
            value={formik.values.phone}
            name='phone'
            id='phone'
            className='form__input'
            type='tel'
          />
          {formik.touched.phone && formik.errors.phone? <p className='form__error-msg'>Невірно вказані данні</p>: null}
        </div>
      </div>
      <div className='form__area'>
        <label className='form__label' htmlFor='shopName'>Назва закладу 
          <span className='form__label--required'>*</span> 
        </label>
        <div className='form__field'>
          <input 
            onChange={formik.handleChange} 
            onBlure={formik.handleBlur} 
            value={formik.values.shopName}
            name='shopName'
            id='shopName'
            className='form__input'
            type='text'
          />
          {formik.touched.shopName && formik.errors.shopName? <p className='form__error-msg'>Невірно вказані данні</p>: null}
        </div>
      </div>
      <div className='form__area'>
        <label className='form__label' htmlFor='address'>Адреса закладу 
          <span className='form__label--required'>*</span> 
              </label>
        <div className='form__field'>
          <input 
            onChange={formik.handleChange} 
            onBlure={formik.handleBlur} 
            value={formik.values.address}
            name='address'
            id='address'
            className='form__input'
            type='text'
            />
          {formik.touched.address && formik.errors.address? <p className='form__error-msg'>Невірно вказані данні</p>: null}
        </div>
      </div>
      <div className='form__area'>
        <label className='form__label' htmlFor='schedule'>Графік роботи 
          <span className='form__label--required'>*</span> 
        </label>
        <div className='form__field'>
          <input 
            onChange={formik.handleChange} 
            onBlure={formik.handleBlur} 
            value={formik.values.schedule}
            name='schedule'
            id='schedule'
            className='form__input'
            type='text'
          />
          {formik.touched.schedule && formik.errors.schedule? <p className='form__error-msg'>Невірно вказані данні</p>: null}
        </div>
      </div>
      <div className='form__area'>
        <label className='form__label' htmlFor='companyName'>Назва ФОП 
          <span className='form__label--required'>*</span> 
        </label>
        <div className='form__field'>
          <input 
            onChange={formik.handleChange} 
            onBlure={formik.handleBlur} 
            value={formik.values.companyName}
            name='companyName'
            id='companyName'
            className='form__input'
            type='text'
          />
          {formik.touched.companyName && formik.errors.companyName? <p className='form__error-msg'>Невірно вказані данні</p>: null}
        </div>
      </div>
      <div className='form__area'>
        <label className='form__label' htmlFor='companyName'>Пароль 
          <span className='form__label--required'>*</span> 
        </label>
        <div className='form__field'>
          <input 
            onChange={formik.handleChange} 
            onBlure={formik.handleBlur} 
            value={formik.values.password}
            name='password'
            id='password'
            className='form__input'
            type='password'
          />
          {formik.touched.password && formik.errors.password? <p className='form__error-msg'>Невірно вказані данні</p>: null}
        </div>
      </div>
      <Button type='submit' text='Зареєструватись' />
    </form>
  )
}

export default Signup