import MediaPlayer from "./plugin/MediaPlayer";
import AutoPlay from "./plugin/AutoPlayPlugin";
import AutoPause from "./plugin/AutoPausePlugin";

import "./assets/styles.css";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

const togglePlay: HTMLElement | null = document.querySelector("#togglePlay");
togglePlay!.onclick = () => player.togglePlay();

const toggleMute: HTMLElement | null = document.querySelector("#toggleMute");
toggleMute!.onclick = () => player.toggleMute();
