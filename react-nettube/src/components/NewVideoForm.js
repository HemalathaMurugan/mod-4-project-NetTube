import React from 'react'
import NavBar from './NavBar'

export default class NewVideoForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    handleSubmit(event) {
      event.preventDefault();
      
      fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          // 'Content-Type': 'application/json'
        },
        body: new FormData(event.target)
      })
        .then(console.log(event.target))

    }
  
    render() {
        return (
          <div>
          < NavBar />
          <div className="new-video-card">
            <div className='ui form'>
              <form onSubmit={e => this.handleSubmit(e)}>
                <div>
                  <input type="hidden" name="video[user_id]" value={1} />
                </div>
                <div>
                  <label>Title: </label>
                  <input type="text" name="video[title]" />
                </div>
                <div>
                  <label>Description: </label>
                  <textarea name="video[description]" ></textarea>
                </div>
                <div>
                  <label>Language: </label>
                  <select name='video[language]'>
                    <option value="Ruby">Ruby</option>
                    <option value="Rails">Rails</option>
                    <option value="Javascript">Javascript</option>
                    <option value="React">React</option>
                  </select><br/>
                </div>
                <div>
                  <input
                    name="video[videoFile]"
                    type="file"
                  /><br />
                </div>
                <div>
                  <input type="submit" className='ui red button'/>
                </div>       
              </form>
            </div>
          </div>
          </div>
        )
    }
}
