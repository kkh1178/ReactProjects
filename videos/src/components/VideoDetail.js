import React from "react";

// So we de-structured props.video to just {video}
const VideoDetail = ({ video }) => {
	return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
