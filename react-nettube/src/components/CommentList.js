import React from 'react'
import Comment from './Comment'

export default class CommentList extends React.Component {
    render(){
        return(
            <div className="comment-list">
                <h2>A Specific Video's Comments</h2>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        )
    }
}