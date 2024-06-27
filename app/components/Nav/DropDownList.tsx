import { FC, ReactNode } from 'react'

interface DropDownProps {
  children: ReactNode
}

const DropDownList: FC<DropDownProps> = ({ children }) => {
  return (
    <li>
      <a className='dropdown-item' href='#'>
        {children}
      </a>
    </li>
  )
}

export default DropDownList
