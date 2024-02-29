import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './redux';
import { Home } from './screens';
import '@workspaceui/componentlibrary/src/declarations.d.ts';
import ThemeContainer from '@workspaceui/componentlibrary/src/components/ThemeContainer';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeContainer>
        <Home />
      </ThemeContainer>
    </Provider>
  );
};

export default App;
