import { useContext } from 'react';
import { themeContex } from '../../themeContext';
import "./TitleAndText.css"
export const TitleAndText: React.FC = () => {
    const ThemeContex = useContext(themeContex);
    if (!ThemeContex) return null;
    const color = ThemeContex.color
    return (
        <div style={{ backgroundColor: color === "black" ? "white" : "black" }} id='backround' >
            <h4 style={{ color: color }}>{color}Child, text to exemple</h4>
        </div>
    );
};