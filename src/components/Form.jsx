import { useState } from 'react'
import { useFormik } from 'formik'

import { Button } from '../components'

function Form({defaultValues, schema, formOptions, submitText}) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowingPassword = () => {
    setShowPassword(!showPassword);
  }

  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} action='' className='form'>
      {formOptions.map(({ name, label, type }) => (
        <div key={name} className='form__area'>
        <label className='form__label' htmlFor={name}>{label}
          <span className='form__label--required'>*</span> 
        </label>
        <div className='form__field'>
          <input 
            onChange={formik.handleChange} 
            value={formik.values[name]}
            name={name}
            id={name}
            className='form__input form__input--password'
            type={!type? showPassword? 'text': 'password': type}
          />
          {formik.errors[name] && <p className='form__error-msg'>{formik.errors[name]}</p>}
            {!type ?
              <button onClick={toggleShowingPassword} className='form__show-btn' type='button'>
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M464.4326,147.54a9.8985,9.8985,0,0,0-17.56,9.1406,214.2638,214.2638,0,0,1-38.7686,251.42c-83.8564,83.8476-220.3154,83.874-304.207-.0088a9.8957,9.8957,0,0,0-16.8926,7.0049v56.9a9.8965,9.8965,0,0,0,19.793,0v-34.55A234.9509,234.9509,0,0,0,464.4326,147.54Z"/>
                  <path d="M103.8965,103.9022c83.8828-83.874,220.3418-83.8652,304.207-.0088a9.8906,9.8906,0,0,0,16.8926-6.9961v-56.9a9.8965,9.8965,0,0,0-19.793,0v34.55C313.0234-1.3556,176.0547,3.7509,89.9043,89.9012A233.9561,233.9561,0,0,0,47.5674,364.454a9.8985,9.8985,0,0,0,17.56-9.1406A214.2485,214.2485,0,0,1,103.8965,103.9022Z"/>
                  <path d="M126.4009,254.5555v109.44a27.08,27.08,0,0,0,27,27H358.5991a27.077,27.077,0,0,0,27-27v-109.44a27.0777,27.0777,0,0,0-27-27H153.4009A27.0805,27.0805,0,0,0,126.4009,254.5555ZM328,288.13a21.1465,21.1465,0,1,1-21.1465,21.1464A21.1667,21.1667,0,0,1,328,288.13Zm-72,0a21.1465,21.1465,0,1,1-21.1465,21.1464A21.1667,21.1667,0,0,1,256,288.13Zm-72,0a21.1465,21.1465,0,1,1-21.1465,21.1464A21.1667,21.1667,0,0,1,184,288.13Z"/>
                  <path d="M343.6533,207.756V171.7538a87.6533,87.6533,0,0,0-175.3066,0V207.756H188.14V171.7538a67.86,67.86,0,0,1,135.7208,0V207.756Z"/>
                </svg>
              </button> : null
            }     
        </div>
      </div>
      ))}
      <Button type='submit' text={submitText} />
    </form>
  )
}

export default Form