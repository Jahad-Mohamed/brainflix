import React, { Component } from "react";
import VideoDetail from "../components/VideoDetails/VideoDetail";
import axios from "axios";
import { GET_VIDEOS_API_URL, GET_VIDEO_INFO_API_URL } from "../api/endpoints";

class MainContent extends Component {
  state = {
    MainVideo: {},
    VideosList: [],
    comments: [],
  };

  componentDidMount() {
    axios.get(GET_VIDEOS_API_URL()).then((response) => {
      const videos = response.data;
      axios.get(GET_VIDEO_INFO_API_URL(videos[0].id)).then((video) => {
        this.setState({
          MainVideo: video.data,
          VideosList: videos,
          comments: video.data.comments,
        });
      });
    });
  }
  handleVideo = (id) => {
    let newVideo = this.state.VideosList.find((value) => value.id === id);
    axios.get(GET_VIDEO_INFO_API_URL(id)).then((response) => {
      this.setState({
        MainVideo: response.data,
        comments: response.data.comments,
      });
    });
  };

  // componentDidUpdate() {
  //   axios.get(GET_VIDEOS_API_URL()).then((response) => {
  //     const videos = response.data;
  //     axios.get(GET_VIDEO_INFO_API_URL(videos[0].id)).then((video) => {
  //       this.setState({
  //         MainVideo: video.data,
  //         VideosList: videos,
  //         comments: video.data.comments,
  //       });
  //     });
  //   });
  // }

  render() {
    return (
      <div>
        <VideoDetail
          video={this.state.MainVideo}
          handleVideo={this.handleVideo}
          comments={this.state.comments}
          videos={this.state.VideosList}
        />
      </div>
    );
  }
}

export default MainContent;
