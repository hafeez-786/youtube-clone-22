import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Youtube from './API/Youtube';
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from './components/VideoList';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} })

  async function handleSubmit(searchItem) {
    const {data: { items: videos }} = await Youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyD5Ono_XIHzCN_u-xouetUdiGJGj08NFHw",
        q: searchItem
      }
    });
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <div className="row">
            <div className="col-md-12">
              <SearchBar onSubmit={handleSubmit}/>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <VideoDetail video={selectedVideo}/>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="row">
            <div className="col-md-12">
              <VideoList 
                videos={videos}
                onVideoSelect={setSelectedVideo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
