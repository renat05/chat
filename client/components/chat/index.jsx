import React from "react";
import SiteBar from './components/sidebar/sidebar'
import Body from './components/body/body'
import MessageBlock from './components/message/message-block'

function Chat({socket}) {
  const [messages, setMessages] = React.useState([])
  const [status, setStatus] = React.useState('')

  React.useEffect(() => {
    socket.on('response', (data) => {
      setMessages([...messages, data])
    })
  },[socket, messages])

  React.useEffect(() => {
    socket.on('responseTyping', (data) => setStatus(data))
    setTimeout(() => setStatus(''), 1000)
  }, [socket])
  return (
    <div className="chat">
    <SiteBar socket={socket}/> 
    <main className="main">
      <Body messages={messages} status={status}/>
      <MessageBlock socket={socket}/>
    </main>
    </div>
  )
}

export default Chat
