import React from 'react';
import "./Sidebar.css";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChat from './sidebarChat';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_header_left">
                    <Avatar style={{ height: '2vw', width: '2vw' }}></Avatar>
                </div>
                <div className="sidebar_header_right">
                    <IconButton>
                        <DonutLargeIcon></DonutLargeIcon>
                    </IconButton>
                    <IconButton>
                        <ChatIcon></ChatIcon>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>
                </div>
            </div>
            <div className='searchbar'>
                <div className='searchbar_container'>
                    <SearchOutlined></SearchOutlined>
                    <input type='text' placeholder='Cerca e inizia una nuova chat'></input>
                </div>
            </div>
            <div className='sidebar_chat'>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
            </div>
        </div>
    );
}

export default Sidebar;
