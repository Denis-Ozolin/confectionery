import { NavLink } from 'react-router-dom'

import { Form, SmallButton, ButtonIcon } from '../components'
import { defaultValues, schema, formOptions } from '../settings/formSettings/signin'

function Signin({closeModal}) {
  return (
    <div className='signin'>
      <div className='signin__out'>
        <SmallButton onClick={closeModal}>
          <ButtonIcon id='close'/>
        </SmallButton>
      </div>
      <Form defaultValues={defaultValues} schema={schema} formOptions={formOptions} submitText='Увійти' />
      <div className='signin__settings'>
        <NavLink onClick={closeModal} to='/cooperation' className='signin__link'>Зареєструватись</NavLink>
        <a href="_" className='signin__link'>Забули пароль?</a>
      </div>
    </div>
  )
}

export default Signin