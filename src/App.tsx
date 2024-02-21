import React from 'react';
import ReactDOM from 'react-dom/client';

import ThemeContainer from 'ComponentLibrary/ThemeContainer';
import 'ComponentLibrary/src/declarations.js';
import './remote_componets.d.ts';
import './index.css';
import { Provider } from 'react-redux';
import store from '../redux';
import { Home } from './screens';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeContainer>
        <Home />
      </ThemeContainer>
    </Provider>
  );
};

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
