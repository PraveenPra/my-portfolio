import React,{useState, useEffect} from 'react'
import io from 'socket.io-client'
import './Chatpg.css'


const socket=io.connect("http://localhost:4000")

const Chatpg1 = ()=>{

//hold the curret message typed in a temp variable
const [m,setM]=useState("intial message")

socket.on('welcometz',(msg)=>{
 setM(msg)
alert(m)
})

const onmsgsubmit=(e)=>{
e.preventDefault()
const sendmsg=e.target.elements.msgid.value
alert (`submitted or sent message ${sendmsg}`)

}

return(<div>
<h2>enter username and message</h2>
<div>
<form onSubmit={onmsgsubmit}>

<h4>username</h4>

<h4>message</h4>
<input name="messagesent" id="msgid"/>

<button type="submit">send message</button>
</form>
</div>
<div className="messagesection">
{m}
</div>
</div>)
}
export default Chatpg1
