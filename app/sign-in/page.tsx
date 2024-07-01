'use client'
import React, { useState } from 'react'
import styled from 'styled-components'
import FlatButton from '../components/buttons/FlatButton'

const StyledContainer = styled.div`
  max-width: 37rem;
`
const StyledDiv = styled.div`
  background-color: #f3f3f3;
`

const ValidationMessage = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`

const SignPage = () => {
  const [validated, setValidated] = useState(false)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    }
    setValidated(true)
  }

  return (
    <StyledContainer className='container py-5 '>
      <StyledDiv className='d-flex flex-column justify-content-center text-center border-secondary border-end border-bottom border-3 rounded-4 m-5 p-5'>
        <h4 className='fw-semibold mb-1'>Sign In</h4>
        <div>
          <div className='my-4 d-flex'>
            <FlatButton className='btn-primary me-1' $blueShadow>
              sign in with Facebook
            </FlatButton>
            <FlatButton className='btn-danger ms-1' $redShadow>
              sign in with Google
            </FlatButton>
          </div>
          <h4 className='fw-semibold m-4 fs-3'>or</h4>
        </div>
        <form
          className={`needs-validation ${validated ? 'was-validated' : ''}`}
          noValidate
          onSubmit={handleSubmit}
        >
          <div className='mb-3'>
            <div className=''>
              {validated && !userName && (
                <ValidationMessage>
                  Please enter your username.
                </ValidationMessage>
              )}
              <input
                type='text'
                className='form-control border-0 rounded-0 border-start border-top border-2 border-secondary mb-1'
                id='inputEmail3'
                placeholder='User Name'
                value={userName}
                onChange={e => setUserName(e.target.value)}
                required
              />
            </div>

            <div className=''>
              {validated && !password && (
                <ValidationMessage>
                  Please enter your password.
                </ValidationMessage>
              )}
              <input
                type='password'
                className='form-control border-0 rounded-0 border-start border-top border-2 border-secondary mb-1'
                id='inputPassword3'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className='form-check text-start '>
            <input
              className='form-check-input'
              type='checkbox'
              id='gridCheck'
              required
            />
            <label
              className='form-check-label fw-semibold fs-6'
              htmlFor='gridCheck'
            >
              Remember Me
            </label>
            <div className='invalid-feedback'>
              You must agree before submitting.
            </div>
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-4'>
            Sign in
          </button>
        </form>
      </StyledDiv>
    </StyledContainer>
  )
}

export default SignPage
