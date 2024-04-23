// Write your code here
import {useState} from 'react'

import {
  BgContainer,
  CardContainer,
  Heading,
  Paragraph,
  Password,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [passwordInput, setPassword] = useState('')
  const onChangePassword = event => {
    setPassword(event.target.value)
  }
  const errorMsg = passwordInput.length < 8

  return (
    <BgContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Password
          type="password"
          value={passwordInput}
          onChange={onChangePassword}
        />
        {errorMsg && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </CardContainer>
    </BgContainer>
  )
}
export default PasswordValidator
