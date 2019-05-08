import React from 'react'

export default class SearchBar extends React.Component {

    render(){
        return(
            <div onChange={e => this.props.handleSubmit(e.target.value)} className="search-bar">
                <input type="text" name="search" placeholder="Search videos"/>
                <button className="tiny ui red button"  type="submit"><i className="fa fa-search"></i>Submit </button>
            </div>
        )
    }
}