import "./App.css";
import React from 'react';
import TextContextProvider from './textContext';
import { GrandpaComponent } from './components/Grandpa/Grandpa';

const App: React.FC = () => {
  return (
    <div>
      <TextContextProvider>
          <GrandpaComponent />
      </TextContextProvider>
    </div>
  );
};

export default App;