import React from 'react'
import SearchBar from './SearchBar'
import MenuButton from './MenuButton'

export default class NavBar extends React.Component {

    handleSubmit = (value) => {
        this.props.handleSubmit(value)
    }

    render(){
        return(
            <div className="navigation-bar">
                    <div className="logo">
                        <img src={require('../assets/nettube-logo.png')}/>
                    </div>

                    <div>
                        <SearchBar handleSubmit={this.props.handleSubmit}/>
                    </div>

                    <div>
                        <MenuButton/>
                    </div>
            </div>
        )
    }
}