import React from "react";
import VideoCard from "./VideoCard";

export default class VideoList extends React.Component {

  render() {
    return (
      <div className="video-list-container">
        <h1>{this.props.title}</h1>
        <div className="video-list">
          {this.props.videos.map(video => (
            <VideoCard video={video} />
          ))}
        </div>
      </div>
    );
  }
}
