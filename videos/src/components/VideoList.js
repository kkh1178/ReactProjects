import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
	// iterating through every video in video list.
	const renderedList = videos.map((video) => {
		return <VideoItem video={video} />;
	});

	return <div>{renderedList}</div>;
};

export default VideoList;
