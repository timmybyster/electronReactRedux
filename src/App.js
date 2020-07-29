import React from 'react'
import {Provider} from 'react-redux';

import Client from './Client';
import store from './Client/store';

function App() {
  return (
    <Provider store={store}>
      <Client/>
    </Provider>
    
  )
}

export default App;