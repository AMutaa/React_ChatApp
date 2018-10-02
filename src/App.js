import React, { Component } from 'react';
import MessageList from './MessageList';
import dummy_data from './Data';

const instanceLocator = 'v1:us1:3cd29534-04d4-42c8-abf7-db12588ba6d4';
const testToken =
  'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/3cd29534-04d4-42c8-abf7-db12588ba6d4/token';
const username = 'Adam';
const roomId = Adam;

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
    this.sendMessage = this.sendMessage.bind(this);
  }
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'Fernando Gomez',
      tokenProvider: new Chatkit.TokenProvider({
        url: testToken,
      }),
    });

    chatManager.connect().then(currentUser => {
      this.currentUser = currentUser;
      this.currentUser.subscribeToRoom({
        roomId,
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message],
            });
          },
        },
      });
    });
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId,
    });
  }

  render() {
    return (
      <div className="app">
        <MessageList roomId={this.state.roomId} messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
