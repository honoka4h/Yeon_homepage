import background_music from '@/assets/sounds/romeo_and_cinderella.mp3';

const bgm = new Audio(background_music)
bgm.loop = true
bgm.volume = 0.5

export default bgm