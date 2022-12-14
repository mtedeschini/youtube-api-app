export default function VideoDetail({ video }) {
	return (
		<div>
			<div className="ui embed">
				<iframe
					src={`https://www.youtube.com/embed/${video.id.videoId}`}
					key={video.id.videoId}
					title={video.snippet.title}
				/>
			</div>
			<div className="ui segment">
				<h4 className="ui header">{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
}
