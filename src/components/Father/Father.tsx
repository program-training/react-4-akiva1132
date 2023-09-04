import { useContext , useState} from 'react';
import { ChildComponent } from '../ChildComponent/ChildComponent';
import { textContex } from '../../textContext';
// import GrandChild from './GrandChild';

export const FatherComponent: React.FC = () => {
    const [input, setinput] = useState<string>('');
    const textcontext = useContext(textContex);
    if (!textcontext) return null;
    const setText = textcontext.setState
    return (
        <div >
            <h4>Father</h4>
            <input
             type="text"
             placeholder='writh change of state'
             value={input}
             onChange={(e)=> setinput(e.target.value)}
             />
            <button onClick={() => setText(input)}>Change User</button>
            <ChildComponent />
        </div>
    );
};