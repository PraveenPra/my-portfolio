import React from 'react'

import './Chatpg.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Chatpg(){
				
return(<div>
				
<Navbar/>		

<h1 className="logo">VChat</h1>



			<div className="messagesection">
<h2 className="welcome">Welcome to VChat</h2>
<div className="mbox">
simple message
</div>
			</div>

<form className="chatform">
<input type="text" id="msg" className="inputbox"placeholder="write something" name="message"/>

<button type="submit" class="submitbutton">
<p>SEND
</p>
</button>
</form>
<hr/>
<Footer/>

</div>)			
}
export default Chatpg
