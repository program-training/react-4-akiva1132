import { useContext } from 'react';
import { textContex } from '../../textContext';

export const ChildComponent: React.FC = () => {
    const textcontext = useContext(textContex);
    if (!textcontext) return null;
    const text = textcontext.text


    return (
        <div >
            <h4>Child</h4>
            <div>{text}</div>
            {/* <button onClick={() => setUser({ name: 'Avi', age: 20 })}>Change User</button> */}
            {/* <GrandChild /> */}
        </div>
    );
};