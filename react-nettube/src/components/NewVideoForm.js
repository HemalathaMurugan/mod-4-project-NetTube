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
            <form onSubmit={e => this.handleSubmit(e)}>
              <input type="hidden" name="video[user_id]" value={1} />
              <label>Title</label>
              <input type="text" name="video[title]" />
              <label>Description</label>
              <input type="text" name="video[Description]" />
              <input
                name="video[videoFile]"
                type="file"
              />
              <input type="submit"/>
      
            </form>
        )
    }
}
