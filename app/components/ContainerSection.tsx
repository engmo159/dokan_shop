import React, { FC, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

const ContainerSection: FC<ContainerProps> = ({ children, className }) => {
  return (
    <section
      className={`section container custom_container text-center ${className} `}
    >
      {children}
    </section>
  )
}

export default ContainerSection
