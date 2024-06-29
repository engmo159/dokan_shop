import React, { FC, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

const ContainerSection: FC<ContainerProps> = ({ children }) => {
  return (
    <section className='section container custom_container text-center '>
      {children}
    </section>
  )
}

export default ContainerSection
