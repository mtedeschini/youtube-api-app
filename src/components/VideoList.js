import VideoItem from "./VideoItem";

export default function VideoList({ videos, onVideoSelect }) {
	return (
		<div className="ui relaxed divided list" >
			{videos.map((video, index) => {
				return (
                    <VideoItem key={index} video={video} onVideoSelect={onVideoSelect}/>
				);
			})}
		</div>
	);
}
