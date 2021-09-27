import React from 'react';
import {Provider} from 'react-redux';
import Store from './src/StoreConfig/index';
import AuthStack from './src/Navigation/AuthStack';
import Main from './main'
const store = Store();
const App = () => {
  return (
    <Provider store={store}>
        <Main/>
    </Provider>
  );
};

export default App
