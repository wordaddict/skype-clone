import React, { Component } from 'react';
import './Chat.css';

const Chat = ({ message }) => {
    const { text, is_user_msg } = message;

    return (
        <span className={`Chat ${is_user_msg ? 'is-user-msg': ''}`}>
            {text}
        </span>
    );
}

class Chats extends Component {
    render() {
        return (
            <div className="Chats">
                {this.props.messages.map(message => {
                    return <Chat message={message} key={message.number} />
                })}
            </div>
        );
    }
}

export default Chats;