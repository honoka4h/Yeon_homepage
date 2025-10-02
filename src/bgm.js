import bgm01 from '@/assets/sounds/romeo_and_cinderella.mp3';
import bgm02 from '@/assets/sounds/barbie_girl.mp3';
import bgm03 from '@/assets/sounds/OPEN_DREAM_LAND.mp3';

const bgms = {
  audio01: new Audio(bgm01),
  audio02: new Audio(bgm02),
  audio03: new Audio(bgm03),
};

Object.values(bgms).forEach(bgm => {
  bgm.loop = true;
  bgm.volume = 0.5;
});

export default bgms;