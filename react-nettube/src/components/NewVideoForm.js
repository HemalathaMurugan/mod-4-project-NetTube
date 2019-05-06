import React from 'react'
import ActiveStorageProvider from 'react-activestorage-provider'

export default class Test extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.fileInput = React.createRef();
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
              <input
                name="video[videoFile]"
                type="file"
              />
              <input type="submit"/>
      
              {/* {uploads.map(upload => {
                switch (upload.state) {
                  case 'waiting':
                    return <p key={upload.id}>Waiting to upload {upload.file.name}</p>
                  case 'uploading':
                    return (
                      <p key={upload.id}>
                        Uploading {upload.file.name}: {upload.progress}%
                      </p>
                    )
                  case 'error':
                    return (
                      <p key={upload.id}>
                        Error uploading {upload.file.name}: {upload.error}
                      </p>
                    )
                  case 'finished':
                    return (
                      <p key={upload.id}>Finished uploading {upload.file.name}</p>
                    )
                }
              })} */}
            </form>
        )
    }
}
