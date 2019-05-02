import React from 'react'
import SearchBar from './SearchBar'
import MenuButton from './MenuButton'

export default class NavBar extends React.Component {
    render(){
        return(
            <div className="navigation-bar">
                <h1>NETTube</h1>
                <SearchBar/>
                <MenuButton/>
            </div>
        )
    }
}