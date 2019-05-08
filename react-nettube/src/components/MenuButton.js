import React from 'react'
import { Link } from 'react-router-dom'

export default class MenuButton extends React.Component {
    render(){
        return(
            <div className="menu">
                <button className="menu-button">Menu</button>
                <div className="menu-content">
                    <Link to="/main">
                        <li>Home</li>
                    </Link>
                    <Link to={"/user"}>
                        <li>My Channel</li>
                    </Link>
                    <Link to="/video">
                        <li>Video</li>
                    </Link>
                    <Link to="/add-video">
                        <li>Add Video</li>
                    </Link>

                    {/* <Link to={`/user/${user.id}`}>
                        <li>My Channel</li>
                    </Link>
                    <Link to={`{/video/${video.id}`}>
                        <li>Video</li>
                    </Link> */}
                    {/* <Link to={`/user/${user.id}/edit}`}>
                        <li>Edit Profile</li>
                    </Link> */}


                </div>
            </div>
        )
    }
}