'use client'
import React, { useState } from 'react'
import styled from 'styled-components'
import FlatButton from '../components/buttons/FlatButton'
import Link from 'next/link'

const StyledContainer = styled.div`
  max-width: 37rem;
`
const StyledDiv = styled.div`
  background-color: #f3f3f3;
  border-top: 3px solid white;
  border-right: 3px solid var(--p-color);
  border-bottom: 3px solid var(--p-color);
  border-left: 3px solid white;
  border-radius: 2rem;
`

const ValidationMessage = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`
const StyledLink = styled(Link)`
  &:hover {
    text-decoration: underline;
    font-weight: bold;
  }
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

  // border-secondary border-end border-bottom  border-3
  return (
    <StyledContainer className='container py-5 '>
      <StyledDiv className='d-flex flex-column justify-content-center text-center   m-5 p-5'>
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
              className='form-check-label fw-semibold fs-6 mb-3'
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
        <div className='text-start my-2'>
          <StyledLink href={''}>Forget Password ?</StyledLink>
        </div>
      </StyledDiv>
    </StyledContainer>
  )
}

export default SignPage
