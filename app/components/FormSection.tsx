'use client'
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'

const ButtonDiv = styled.div`
  text-align: end !important;
`
const StyledButton = styled.button`
  background-color: var(--sec-color);
  color: white;
`
const FormSection = () => {
  return (
    <form>
      <div className='mb-3'>
        <input
          type='text'
          className='form-control border border-secondary p-2'
          id='exampleInputText'
          aria-describedby='textHelp'
          placeholder='Your Name'
        />
      </div>
      <div className='mb-3'>
        <input
          type='email'
          className='form-control border-secondary p-2'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
          placeholder='Your Email'
        />
      </div>
      <div className='mb-3'>
        <textarea
          className='form-control border-secondary'
          id='exampleFormControlTextarea1'
          placeholder='Your Feedback'
          rows={10}
        />
      </div>
      <ButtonDiv>
        <StyledButton type='submit' className='btn '>
          Submit
        </StyledButton>
      </ButtonDiv>
    </form>
  )
}

export default FormSection
