import React from 'react'
import {Link} from 'react-router-dom'
import './Homepg.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Homepg(){
				
return(<div>
				
<Navbar/>		
				
<div className="homebody">
				<div className="homebodycontent">

<div className="biglogo">
<div className="v">V<span>Chat</span></div>
</div>

<h1 className="greet">Hi Welcome</h1>

<button className="letschat"><Link to="/chat" 
className="letschat"
>Let's Chat</Link></button>


				</div>
</div>
<Footer/>
</div>)			
}
export default Homepg
