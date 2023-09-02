import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/chat';
import Pusher from 'pusher-js';
import { useEffect, useState } from 'react';
import axios from './axios';
function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data)
    }).catch();
  }, []);

  useEffect(() => {
    var pusher = new Pusher('a2e1d7e0112669256b0c', {
      cluster: 'eu'
    });
    //ogni volta che viene trovato un nuovo messaggio pusher lo accoda alla lista dei messaggi
    var channel = pusher.subscribe('messages');
    channel.bind('insert', function (newMessage) {
      setMessages([...messages, newMessage]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  return (
    <div className="app">
      <div className='appBody'>
        <Sidebar></Sidebar>
        <Chat messages={messages}></Chat>
      </div>
    </div>
  );
}

export default App;
