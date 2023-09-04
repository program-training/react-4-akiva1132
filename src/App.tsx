import "./App.css";
import React from 'react';
import TextContextProvider from './textContext';
import ThemeContextProvider from './themeContext';
import { GrandpaComponent } from './components/Grandpa/Grandpa';
import { ThemeSwitcher } from './components/ThemeSwitcher/ThemeSwitcher';
// first exercise:
// const App: React.FC = () => {
//   return (
//     <div>
//       <TextContextProvider>
//           <GrandpaComponent />
//       </TextContextProvider>
//     </div>
//   );
// };

// second exercise:
const App: React.FC = () => {
  return (
    <div id="app">
      <ThemeContextProvider>
        <ThemeSwitcher />
      </ThemeContextProvider>
    </div>
  );
};
export default App;