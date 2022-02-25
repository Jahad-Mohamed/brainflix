import React from "react";
import videos from "../data/videos.json";
import Video from "../components/video/Video";
import VideosDetailList from "../data/video-details.json";
import VideoDetail from "../components/VideoDetails/VideoDetail";
import Comment from "../components/Comment/Comment";

export default function MainContent() {
  console.log(videos[0]);
  videos.map((video) => {
    console.log(video);
    return <Video key={video.title} video={video} />;
  });

  return (
    <main class="main-content">
      <div class="main-content__left">
        <section class="main-content__section">
          <VideoDetail video={VideosDetailList[0]} />
          <Comment comments={VideosDetailList[0].comments} />
        </section>
      </div>
      <aside class="main-content__right">
        <h2 className="main-content__">NEXT VIDEOS</h2>
        {videos.map((video) => {
          console.log(video);
          return (
            <>
              <Video
                thumbnail={video.image}
                title={video.title}
                channel={video.channel}
              />
            </>
          );
        })}
      </aside>
    </main>
  );
}
