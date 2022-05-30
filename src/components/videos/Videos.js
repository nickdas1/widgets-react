import React, { useState, useEffect } from "react";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import VideoSearchBar from "./VideoSearchBar";
import useVideos from "../../hooks/useVideos";

export default function Videos() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos("cats");

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <div className="ui container">
            <VideoSearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            onVideoSelect={setSelectedVideo}
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
