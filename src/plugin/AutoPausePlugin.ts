import { MediaPlayer } from "./interfaces/MediaPlayer";

class AutoPausePlugin {
  private threshold: number;
  private player!: MediaPlayer;

  constructor() {
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handeVisibilityChange = this.handeVisibilityChange.bind(this);
  }

  run(player: MediaPlayer) {
    this.player = player;
    const mediaObserver = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });
    mediaObserver.observe(this.player.media);
    document.addEventListener("visibilitychange", this.handeVisibilityChange);
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    const isVisibleMedia = entry.intersectionRatio >= this.threshold;
    isVisibleMedia ? this.player.play() : this.player.pause();
  }

  private handeVisibilityChange() {
    const isVisibleTab = document.visibilityState === "visible";
    isVisibleTab ? this.player.play() : this.player.pause();
  }
}

export default AutoPausePlugin;
