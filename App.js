import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import Auth from './src/screens/Auth';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Auth />
      </Provider>
    );
  }
}

export default App;
