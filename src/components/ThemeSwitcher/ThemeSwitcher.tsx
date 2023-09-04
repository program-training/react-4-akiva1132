import { useContext, useState } from 'react';
import { TitleAndText } from '../TitleAndText/TitleAndText';
import { themeContex } from '../../themeContext';

export const ThemeSwitcher: React.FC = () => {
    const ThemeContex = useContext(themeContex);
    if (!ThemeContex) return null;
    const setDarkMode = ThemeContex.setDarkMode
    return (
        <div >
            <h4>This is father</h4>
            <select
                onChange={(e) => e.target.value === "white"
                    || e.target.value === "black" ?
                    setDarkMode(e.target.value) : null}
                name="" id="">
                <option value="black">dark</option>
                <option value="white">light</option>
            </select>
            <TitleAndText />
        </div>
    );
};