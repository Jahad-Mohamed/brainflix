import React, { Component } from "react";
import VideoDetail from "../components/VideoDetails/VideoDetail";
import axios from "axios";

class MainContent extends Component {
  state = {
    MainVideo: {},
    VideosList: [],
    comments: [],
  };

  async fetchData() {
    try {
      const response = await axios.get(`http://localhost:8080/videos`);
      const videos = response.data;
      this.fetchVideo(videos[0].id);
      this.setState({
        VideosList: videos,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async fetchVideo(id) {
    const video = await axios.get(`http://localhost:8080/videos/${id}`);
    this.setState({
      MainVideo: video.data,
      comments: video.data.comments,
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchVideo(this.props.match.params.id);
    }
  }

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
