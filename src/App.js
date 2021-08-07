import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Homepg from './pages/Homepg'
import Chatpg from './pages/Chatpg'
import Contactpg from './pages/Contactpg'
import Chatpg1 from './pages/Chatpg1'

function App(){
				
return(<Router>
				
<Route exact path='/'	component={Homepg}/>

<Route exact path='/chat'	component={Chatpg}/>

<Route exact path='/Chat1'	component={Chatpg1}/>

<Route exact path='/contact'	component={Contactpg}/>	

</Router>)		
				
}
export default App
