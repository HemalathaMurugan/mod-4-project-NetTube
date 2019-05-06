import React from 'react'

export default class AddComment extends React.Component {
    render(){
        return(
            <div className="add-comment">
                <form>
                    <h2>Add Comment</h2>
                    <textarea rows="4" cols="80" name="comment" placeholder="Write your comment here"></textarea>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}