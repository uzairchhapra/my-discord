import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'

const Message = ({ timestamp, message, user }) => {
    console.log(message)
    return (
        <div className="message">
            <Avatar src={user.photo} />
            <div className="message__info">
                <h4>
                    {user.displayName}
                    <span className="message__timestamp">
                        {timestamp ? new Date(timestamp?.toDate()).toLocaleString() : null}
                    </span>
                </h4>
                <p className='message__content'>
                    {message}
                </p>
            </div>
        </div>
    )
}

export default Message
