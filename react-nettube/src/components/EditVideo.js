import React from 'react'

class EditVideo extends React.Component {

  componentDidMount(){
  //   let id = this.props.match.params.id
      fetch(`http://localhost:3001/video`,{
          headers:{
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
      })
  }

  render(){
    return (
      <div>
        <h1>Edit Video</h1>
      </div>
    );
  }
  }
  export default EditVideo;