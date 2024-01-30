import React from 'react'
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = (props) => {
  return (
    <div className="notification-card">
      
      <div className="notification-content">
        <div className="notification-text">
          <p>{props.children}</p>
        </div>
      </div>
      <GrFormClose className="cross-icon" />
    </div>
  )
}

export default Notification
