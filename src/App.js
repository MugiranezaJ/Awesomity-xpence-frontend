import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { AppRoutes } from './routes';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <AppRoutes/>
      </div>
    );
  }
}

export default App;
