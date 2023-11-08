import { MediaConfig } from "./interfaces/MediaPlayer";

class MediaPlayer {
  public media: HTMLMediaElement | null;
  public plugins: Array<any>;
  muted: boolean = false;

  constructor(config: MediaConfig) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
  }

  private _initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }

  play() {
    this.media!.play();
  }

  pause() {
    this.media!.pause();
  }

  mute() {
    this.media!.muted = true;
  }

  toggleMute() {
    this.media!.muted = !this.media!.muted;
  }

  togglePlay() {
    this.media!.paused ? this.play() : this.pause();
  }
}

export default MediaPlayer;
