import React, { Component } from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export default class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("What does the fox say");
  }

  onTermSubmit = async term => {
    const {
      data: { items }
    } = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videos: items, selectedVideo: items[0] });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui stackable grid">
          <div className="ui row">
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
              selectedVideo={this.state.selectedVideo}
            />
          </div>
        </div>
      </div>
    );
  }
}
