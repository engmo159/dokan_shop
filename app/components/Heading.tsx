import React, { FC, ReactNode } from 'react'

interface HeadingProps {
  children: ReactNode
}
const Heading: FC<HeadingProps> = ({ children }) => {
  return <h2 className='fw-semibold fs-1  mb-4'>{children}</h2>
}

export default Heading
