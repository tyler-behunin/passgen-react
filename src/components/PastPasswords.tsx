import { FC } from 'react'
import '../css/pastpasswords.scss'
import { Password } from './Password'

interface Props {
  passwords: string[]
  copy: (parameter:string) => void
}

export const PastPasswords:FC<Props> = ({passwords, copy}) => {
  return (
    <div id="pastPasswords">
      {
        passwords.map((password) => {
          return (
            <Password password={password} key={password} copy={copy}/>
          )
        })
      }
  </div>
  )
}