import React, { Component } from 'react';
import MessageList from './MessageList';
import dummy_data from './Data';

class App extends Component {
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: username,
      tokenProvider: new Chatkit.TokenProvider({
        url: testToken,
      }),
    });
  }

  state = {
    messages: dummy_data,
  };
  render() {
    return (
      <div className="app">
        {/* <Title /> */}
        <MessageList messages={this.state.messages} />
        {/* <SendMessageList /> */}
      </div>
    );
  }
}

export default App;
