import React, { Component } from 'react';
import dummy_data from './Data';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Title />
        <MessageList />
        <SendMessageList />
      </div>
    );
  }
}

export default App;
