import React from 'react';


import HomeView from './src/Home/HomeView';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './src/reducers';


const store = createStore(rootReducer);

console.disableYellowBox = true;
const App = () => {
  return (
    <Provider store={store}>
      <HomeView />
    </Provider>
  );
};

export default App;
