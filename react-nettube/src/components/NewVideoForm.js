import React from 'react'

export default class Test extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    handleSubmit(event) {
      event.preventDefault();
      
      fetch('http://localhost:3000/videos', {
        method: 'POST',
        body: new FormData(event.target)
      })
        .then( res => res.json())
        .then(console.log)

    }
  
    render() {
        return (
          <div>
            <div className="add-video-form-container">
            <h1>Add a New Video</h1>
              <form onSubmit={e => this.handleSubmit(e)}>
                <div class="add-video-form">
                  <input type="hidden" name="video[user_id]" value={1} />
                  <label><b>Title</b></label>
                    <br/>
                  <input type="text" name="video[title]" placeholder="Add a title"/>
                    <br/><br/>
                  <label><b>Description</b></label>
                    <br/>
                  <input type="text" name="video[Description]" placeholder="Add a Description"/>
                    <br/><br/>
                  <input
                    type="file"
                    name="video[videoFile]"
                  />
                    <br/><br/>
                  <input type="submit"/>
                </div>
              </form>
            </div>
          </div>
        )
    }
}
