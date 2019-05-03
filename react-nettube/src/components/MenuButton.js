import React from 'react'

export default class MenuButton extends React.Component {
    render(){
        return(
            <div className="menu">
                <button class="menu-button">Menu</button>
                <div className="menu-content">
                    <a href="#">Home</a>
                    <a href="#">My Profile</a>
                    <a href="#">Add Video</a>
                    <a href="#">Add Playlist</a>
                </div>
            </div>
        )
    }
}