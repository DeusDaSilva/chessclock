import React from 'react';
import {StatusBar} from 'react-native';

declare const global: {HermesInternal: null | {}};

import MainMenu from './Screens/MainMenu';

const App = () => {
  return <MainMenu />;
};

export default App;
