import React from 'react'
import SearchBar from './SearchBar'
import MenuButton from './MenuButton'

export default class NavBar extends React.Component {
    render(){
        return(
            <div className="navigation-bar">
                    <div className="logo">
                        <h1>NETTube</h1>
                    </div>

                    <div>
                        <SearchBar/>
                    </div>

                    <div>
                        <MenuButton/>
                    </div>
            </div>
        )
    }
}