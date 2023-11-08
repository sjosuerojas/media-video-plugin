export interface MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  _initPlugins: () => void;
  play: () => void;
  pause: () => void;
  mute: () => void;
  toggleMute: () => void;
  togglePlay: () => void;
}

export interface MediaConfig {
  el: HTMLVideoElement | null;
  plugins: Array<any>;
}
