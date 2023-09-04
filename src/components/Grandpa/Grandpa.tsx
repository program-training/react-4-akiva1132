import { useContext } from 'react';
import { FatherComponent } from '../Father/Father';
// import GrandChild from './GrandChild';

export const GrandpaComponent: React.FC = () => {

return (
<div >
<h4>Grandpa</h4>
<FatherComponent/>
</div>
);
};