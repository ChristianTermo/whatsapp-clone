import React, { useState } from 'react';
import './chat.css'
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import App from '../../App';
import axios from '../../axios';

const Chat = ({ messages }) => {
    const [input,setInput]=useState("");

    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post("/messages",{
            message: input ,
            name: "author name",
            timestamp:"now",
            received:false,
        }).then();
        setInput("")
    }
    
    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar></Avatar>
                <div className='chat_header_info'>
                    <h3>Chat Name</h3>
                    <p><strong>Last seen: </strong>2 hours ago</p>
                </div>
                <div className='chat_header_right'>
                    <IconButton>
                        <SearchOutlined></SearchOutlined>
                    </IconButton>
                    <IconButton>
                        <AttachFile></AttachFile>
                    </IconButton>
                    <IconButton>
                        <MoreVert></MoreVert>
                    </IconButton>
                </div>
            </div>
            <div className='chat_body'>
                {messages.map((message) => (
                    <p key={message._id} className={`chat_message ${message.received && "chat_receiver"}`}>
                        <span className='chat_name'>{message.name}</span>
                        {message.message}
                        <span className='chat_timestamp'>{message.timestamp}</span>
                    </p>
                ))}
            </div>
            <div className='chat_footer'>
                <IconButton>
                    <InsertEmoticon></InsertEmoticon>
                </IconButton>
                <form>
                    <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Scrivi un messaggio...' type="text"></input>
                    <button onClick={sendMessage} type='submit'></button>
                </form>
            </div>
        </div>
    );
}

export default Chat;
