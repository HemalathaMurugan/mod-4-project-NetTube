import React from 'react'

export default class SearchBar extends React.Component {
    render(){
        return(
            <div className="search-bar">
                <input type="text" name="search" placeholder="Search videos"/>
                <button className=" tiny ui red basic button"  type="submit"><i class="fa fa-search"></i></button>
            </div>
        )
    }
}