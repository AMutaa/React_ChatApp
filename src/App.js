import React, { Component } from 'react';
import dummy_data from './Data';

class App extends Component {
  state = {
    messages: dummy_data,
  };
  render() {
    return (
      <div className="app">
        <Title />
        <MessageList messages={messages} />
        <SendMessageList />
      </div>
    );
  }
}

export default App;
