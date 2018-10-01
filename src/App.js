import React, { Component } from 'react';

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
