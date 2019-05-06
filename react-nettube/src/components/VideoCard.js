import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

export default class VideoCard extends React.Component {
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.language}</p>
            </div>
        )
    }
}
