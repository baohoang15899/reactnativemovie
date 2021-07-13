import React from 'react';
import { Provider } from 'react-redux'
import Store from './src/StoreConfig/index';

import Auth from './src/Screen/Auth/Index';
const store = Store();
const App = () =>{
  return (
    <Provider  store={store}>
    <Auth/>
    </Provider>
  );
}

export default App;
