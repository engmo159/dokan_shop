'use client'
import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface ButtonProps {
  children: ReactNode
  className?: string
  $redShadow?: boolean
  $blueShadow?: boolean
}

const StyledButton = styled.button<{
  $redShadow?: boolean
  $blueShadow?: boolean
}>`
  ${props =>
    props.$redShadow &&
    css`
      box-shadow: 2px 2px 2px red;
    `}
  ${props =>
    props.$blueShadow &&
    css`
      box-shadow: 2px 2px 2px blue;
    `}
`

const FlatButton: FC<ButtonProps> = ({
  children,
  className,
  $redShadow,
  $blueShadow,
}) => {
  return (
    <StyledButton
      type='button'
      className={`btn   flex-grow-1 px-0 rounded-0 ${className}`}
      $redShadow={$redShadow}
      $blueShadow={$blueShadow}
    >
      {children}
    </StyledButton>
  )
}

export default FlatButton
