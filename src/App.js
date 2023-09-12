
import { FullScreenContainer,BorderBox11 } from '@jiaminghi/data-view-react'

import './App.css';
import Home from './views/home'




function App() {
  return (
   <FullScreenContainer>
    <BorderBox11  color={['red', 'green']} backgroundColor='blue'>
    <Home/>
    </BorderBox11>
   
   </FullScreenContainer>
  );
}

export default App;
