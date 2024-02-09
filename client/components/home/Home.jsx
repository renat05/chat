import { useNavigate } from "react-router-dom"
import React from "react";
import './home.css';
function ChatPage({socket}) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', user);
    socket.emit('newUser', {user, socketID: socket.id})
    navigate('/chat')
  } 
    return (
      <>
      <form onSubmit={handleSubmit} className="container">
        <h2>Вход в чат</h2>
        <label htmlFor="user"></label>
        <input className="userInput" type='text' id="user" value={user} onChange={(e) => setUser(e.target.value) }/>
        <button className="homeBtn" type="submit">entry</button>
      </form>
      </>
    ) 
  }
  
  export default ChatPage
  