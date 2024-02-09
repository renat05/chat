import React from "react";
import '../../index.css'
import "./message.css";
function MessageBlock({socket}) {

    const isTyping = () => socket.emit('typing', `${localStorage.getItem('user')} is typing`)
    let [message, setMessage] = React.useState('');
    const handleSend = (e) => {
        e.preventDefault()
        if(message.trim() && localStorage.getItem('user')){
            socket.emit('message', {
                    text: message,
                    name: localStorage.getItem('user'),
                    id: `${socket.id} - ${Math.random()}`,
                    socketID: socket.id
            })
        }
        setMessage('');
    }
    return ( 
     <>
      <form id="MessageForm" onSubmit={handleSend}>
          <input type="text" id="MessageInput" 
          value={message}
          onChange={(e) => setMessage(e.target.value)} 
          onKeyDown={isTyping}
          />
          <button className="Send">Send<i className="fa-solid fa-paper-plane"></i></button>
      </form>
     </>
     );
}

export default MessageBlock;