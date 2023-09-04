import React, { createContext, useState } from 'react';

type themeContex = "white" | "black"

interface themeContextType {
    color: themeContex
    setDarkMode: React.Dispatch<React.SetStateAction<themeContex>>;
}

interface themeContextProviderProps {
    children: React.ReactNode;
}

export const themeContex = createContext<themeContextType | null>(null);

const ThemeContextProvider: React.FC<themeContextProviderProps> = (props) => {
    const [color, setDarkMode] = useState<themeContex>("black");
    return (
        <themeContex.Provider value={{ color, setDarkMode }}>
            {props.children}
        </themeContex.Provider>
    );
};
export default ThemeContextProvider;
