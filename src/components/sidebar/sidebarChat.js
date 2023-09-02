import React from 'react';
import "./sidebarChat.css";
import { Avatar, IconButton } from '@material-ui/core';
const SidebarChat = () => {
    return (
        <div className='sidebarChat'>
            <Avatar></Avatar>
            <div className='sidebarChat_info'>
                <h2>John Doe</h2>
                <p>message</p>
            </div>
        </div>
    );
}

export default SidebarChat;
