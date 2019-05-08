import React from 'react'

export default class AddComment extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user_id: e.target.user_id.value,
                video_id: e.target.video_id.value,
                content: e.target.content.value
            })
        })
    }
    
    render(){
        return(
            <div  className="ui form">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div>
                        <input type="hidden" name="user_id" value={1} />
                    </div>
                    <div>
                        <input type="hidden" name="video_id" value={1} />
                    </div>
                    <div>
                        <label>Add Comment</label>
                        <textarea name="content" rows="3"  ></textarea>
                    </div>
                    <button type='submit' className="ui red button">Submit</button>
                </form>
            </div>
        )
    }
}