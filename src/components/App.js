import SearchBar from "./SearchBar";
import { YoutubeService } from "../api/youtube";
import { useEffect, useState } from "react";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

function App() {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	const onSearchSubmit = (search) => {
		YoutubeService.getVideos(search, 5)
			.then((response) => {
				setSelectedVideo(response.data.items[0]);
				setVideos(response.data.items);
			})
			.catch((error) => console.log(error));
	};

	const onVideoSelect = (video) => {
		setSelectedVideo(video);
	};

  useEffect(() => {
    onSearchSubmit('buildings')
  }, []);

	return (
		<div className="App ui container">
			<SearchBar onFormSubmit={onSearchSubmit} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						{selectedVideo ?  <VideoDetail video={selectedVideo}/> : "Loading..." }
					</div>
					<div className="five wide column">
						<VideoList videos={videos} onVideoSelect={onVideoSelect} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
