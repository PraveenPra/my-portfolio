import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar(){
				
return(<div>
				
<nav>
	<div className="v">V<span>Chat</span></div>
	
	<ul>
					
	<li><Link to="/" className="linkclass">Home</Link></li>

	<li><Link to="/chat"className="linkclass">Chat</Link></li>

	<li><Link to="/chat1"className="linkclass">Chat1</Link></li>


	<li><Link to="/contact" className="linkclass" >contact</Link></li>
					
	</ul>
				
</nav>				
				</div>)			
}
export default Navbar
