import React from 'react'
import { Link } from 'react-router-dom'

export default class MenuButton extends React.Component {
    render(){
        return(
            <div className="menu">
                <button className="menu-button">Menu</button>
                <div className="menu-content">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/user">
                        <li>My Channel</li>
                    </Link>
                        <li>Edit Profile</li>
                        <li>Add Video</li>
                        <li>Add Playlist</li>
                </div>
            </div>
        )
    }
}