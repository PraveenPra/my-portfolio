import React from 'react'

import './Contactpg.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contactpg(){
				
return(<div  className="contactbody midheading">
				<Navbar/>
					<div >
									<div className="formbody">
			<h1 className="formtitle ">Ask Me Anything</h1>
			<p className="formsubtitle">Feel free to ask me a question. Fill out the form below or send me an email to <br/> manikanta.r.mk355@gmail.com</p>
			
			<form className="contactform">
				<input type="text"	 placeholder="name*"/>
				<input type="email" placeholder="email*"/>
				<textarea rows="3" columns="4" type="text"	 placeholder="your message*"/>
								<br/>
				<input className="submit" type="submit" />
							
			</form>
							</div>
							</div>
							<hr/>
			<Footer/>
			</div>)			
}
export default Contactpg
