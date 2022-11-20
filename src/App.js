import './App.css';


import Me, {me} from './profile/ProfilePhoto'
import FullName, {FUllName} from './profile/FullName'
import Address, {address} from './profile/Address'


function App() {
  return(
  <div className='App'>
   <br></br>
<Me/>
<FullName/>
<Address/>
  </div>
  );
}
export default App

 