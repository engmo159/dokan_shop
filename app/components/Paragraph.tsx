'use client'

import { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface ParagraphProps {
  children: ReactNode
}

const StyledP = styled.p`
  color: var(--p-color);
  letter-spacing: 3px;
`

const Paragraph: FC<ParagraphProps> = ({ children }) => {
  return <StyledP className='fs-5 lead mb-5'>{children}</StyledP>
}

export default Paragraph
