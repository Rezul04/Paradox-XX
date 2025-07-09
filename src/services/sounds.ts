let backgroundAudio: HTMLAudioElement | null = null;

export const playMoveSound = (mute: boolean) => {
  if (mute) return;
  const audio = new Audio('/sounds/click.mp3');
  audio.play().catch(console.error);
};

export const playWinSound = (mute: boolean) => {
  if (mute) return;
  const audio = new Audio('/sounds/wins.mp3');
  audio.play().catch(console.error);
};

export const initBackgroundMusic = (mute: boolean) => {
  if (backgroundAudio) return;

  backgroundAudio = new Audio('/sounds/background.mp3');
  backgroundAudio.loop = true;
  backgroundAudio.volume = 0.3;

  if (!mute) {
    backgroundAudio.play().catch((err) => console.log("BG sound failed:", err));
  }
};

export const toggleBackgroundMusic = (mute: boolean) => {
  if (!backgroundAudio) return;

  if (mute) {
    backgroundAudio.pause();
  } else {
    backgroundAudio.play().catch(console.error);
  }
};

export const stopBackgroundMusic = () => {
  if (backgroundAudio) {
    backgroundAudio.pause();
    backgroundAudio.currentTime = 0;
    backgroundAudio = null;
  }
};
