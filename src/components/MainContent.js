import React, { Component } from "react";
import VideoDetail from "../components/VideoDetails/VideoDetail";
import axios from "axios";
import { GET_VIDEOS_API_URL, GET_VIDEO_INFO_API_URL } from "../api/endpoints";

class MainContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstVideo: [],
      VideosDetailList: [],
      comments: [],
    };
  }

  handleVideo = (id) => {
    let newVideo = this.state.VideosDetailList.find((val) => val.id === id);
    axios.get(GET_VIDEO_INFO_API_URL(id)).then((res) => {
      this.setState({ FirstVideo: res.data, comments: res.data.comments });
    });
  };

  componentDidMount() {
    console.log(this.props);
    axios.get(GET_VIDEOS_API_URL()).then((res) => {
      const videos = res.data;
      axios.get(GET_VIDEO_INFO_API_URL(videos[0].id)).then((video) => {
        this.setState({
          FirstVideo: video.data,
          VideosDetailList: videos,
          comments: video.data.comments,
        });
      });
    });
  }

  render() {
    return (
      <div>
        <VideoDetail
          video={this.state.FirstVideo}
          handleVideo={this.handleVideo}
          comments={this.state.comments}
          videos={this.state.VideosDetailList}
        />
      </div>
    );
  }
}

export default MainContent;
