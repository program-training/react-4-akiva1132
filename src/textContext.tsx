import React, { createContext, useState } from 'react';

type textContex = string

interface UserContextType {
  text: textContex
  setState: React.Dispatch<React.SetStateAction<textContex>>;
}

interface textContextProviderProps {
  children: React.ReactNode;
}

export const textContex = createContext<UserContextType | null>(null);


const TextContextProvider: React.FC<textContextProviderProps> = (props) => {
  const [text, setState] = useState<textContex>("hello world!");
  return (
    <textContex.Provider value={{ text, setState }}>
      {props.children}
    </textContex.Provider>
  );
};
export default TextContextProvider;
