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
  async fetchData() {
    await axios.get(GET_VIDEOS_API_URL()).then((response) => {
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

  componentDidMount() {
    console.log("component Did mount");
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      console.log("component did update");
      console.log(prevProps.match.params.id);
      console.log(this.props.match.params.id);
      axios.get(GET_VIDEOS_API_URL()).then((response) => {
        const videos = response.data;
        axios
          .get(GET_VIDEO_INFO_API_URL(this.props.match.params.id))
          .then((video) => {
            this.setState({
              MainVideo: video.data,
              VideosList: videos,
              comments: video.data.comments,
            });
          });
      });
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
