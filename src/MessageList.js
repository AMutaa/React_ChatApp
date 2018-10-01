import React, { Component } from 'react';

class MessageList extends Component {
  render() {
    return (
      <div>
        {this.props.messages.map(message => (
          <div>
            <li key={message.id}>
              <div>{message.senderId}</div>
              <div>{message.text}</div>
            </li>
          </div>
        ))}
      </div>
    );
  }
}

export default MessageList;
