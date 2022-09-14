import { FC } from 'react'
import '../css/password.scss'

interface Props {
  password: string
  copy: (argument:string) => void
}

export const Password:FC<Props> = ({password, copy}) => {
  return (
    <div className="passwordWrapper" onClick={() => copy(password)}>
      <span className="password">
        {password}
      </span>
    </div>
  )
}