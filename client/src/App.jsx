import { Route } from 'react-router-dom';
import socketio from 'socket.io-client';
import Home from '../components/home/Home';
import Chat from '../components/chat/index';
import {Routes} from 'react-router-dom'

const socket = socketio.connect('http://localhost:5001')
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home socket={socket}/>}></Route>
      <Route path='/chat' element={<Chat socket={socket}/>}></Route>
    </Routes>
    </>
  )
}

export default App
