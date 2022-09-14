import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import '../css/alert.scss'

interface Props {
  alert: string
  alertActive: boolean
  alertType: string
}

export const Alert:FC<Props> = ({alert, alertActive, alertType}) => {
  return (
    <CSSTransition in={alertActive} timeout={500} classNames="alert" unmountOnExit>
      <div className="transitionWrapper">
          <div id="copyAlertWrapper" className={alertType}>
            <span id="copyAlert">{alert}</span>
          </div>
      </div>
    </CSSTransition>
  )
}