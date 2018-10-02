import React, { Component } from 'react';

class MessageList extends Component {
  render() {
    return (
      <div>
        {this.props.messages.map((message, idx) => {
          <li key={idx}>
            <div>{message.senderId}</div>
            <div>{message.text}</div>
          </li>;
        })}
      </div>
    );
  }
}

export default MessageList;
