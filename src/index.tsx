import React from 'react';
import ReactDOM from 'react-dom/client';
// import { spy } from 'mobx';

import { App } from './components/App';

import { RootStoreContext } from './context/root';

import RootStore from './store/root';

import './styles/index.css';

// spy((event) => console.log(event)); // debugging, all mobx events and working with their

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RootStoreContext.Provider value={new RootStore()}>
      <App />
    </RootStoreContext.Provider>
  </React.StrictMode>
);
