import React, { Component } from "react";

import VideosDetailList from "../data/video-details.json";
import VideoDetail from "../components/VideoDetails/VideoDetail";

class MainContent extends Component {
  state = {
    VideosDetailList: VideosDetailList[0],
  };
  handleVideo = (id) => {
    let newVideo = VideosDetailList.find((val) => val.id === id);
    this.setState({ VideosDetailList: newVideo });
    console.log(newVideo);
  };

  render() {
    console.log(VideosDetailList);
    return (
      <div>
        <VideoDetail
          video={this.state.VideosDetailList}
          handleVideo={this.handleVideo}
        />
      </div>
    );
  }
}

export default MainContent;
