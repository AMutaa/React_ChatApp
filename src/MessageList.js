import React, { Component } from 'react';

class MessageList extends Component {
  render() {
    return (
      <div>
        <h1>John Rambo</h1>
        {this.props.messages.map(message => <li>{message.senderId}</li>)}
      </div>
    );
  }
}

export default MessageList;
