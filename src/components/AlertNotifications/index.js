// AlertNotifications component
import React, {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'

import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="alert-noti-container">
        <h1>Alert Notifications</h1>

        <Notification className="noti-card">
          <AiFillCheckCircle className="success icons" />
          <div className="noti">
            <h1 className="success">Success</h1>
            <p className="desc">You can access all the files in the folder</p>
          </div>
        </Notification>

        <Notification>
          <RiErrorWarningFill className="error icons" />
          <div className="noti">
            <h1 className="error">Error</h1>
            <p className="desc">
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </Notification>

        <Notification>
          <MdWarning className="warning icons" />
          <div className="noti">
            <h1 className="warning">Warning</h1>
            <p className="desc">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
        </Notification>

        <Notification>
          <MdInfo className="info icons" />
          <div className="noti">
            <h1 className="info">Info</h1>
            <p className="desc">Anyone on the internet can view these files</p>
          </div>
        </Notification>
      </div>
    )
  }
}

export default AlertNotifications
