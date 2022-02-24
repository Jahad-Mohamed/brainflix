import React from "react";
import videos from "../data/videos.json";
import Video from "./video/Video";

export default function MainContent() {
  console.log(videos[0]);
  videos.map((video) => {
    // console.log(video);
    return <Video key={video.title} video={video} />;
  });

  return (
    <main class="main-content">
      <div class="main-content__left">
        <section class="main-content__section">
          <div class="main-content__product">PRODUCT ONE</div>
          <div class="main-content__product">PRODUCT TWO</div>
          <div class="main-content__product">PRODUCT THREE</div>
        </section>
        <article class="main-content__image-gallery">
          <img
            src="https://via.placeholder.com/150/80DEEA"
            alt="placeholder"
            class="main-content__image"
          />
          <img
            src="https://via.placeholder.com/150/80DEEA"
            alt="placeholder"
            class="main-content__image"
          />
          <img
            src="https://via.placeholder.com/150/80DEEA"
            alt="placeholder"
            class="main-content__image"
          />
        </article>
      </div>
      <aside class="main-content__right">
        {videos.map((video) => {
          // console.log(video);
          return (
            <Video
              key={video.title}
              thumbnail={video.image}
              channel={video.channel}
            />
          );
        })}
      </aside>
    </main>
  );
}
