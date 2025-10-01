<script setup>
import { onMounted } from 'vue';
import background_music from '@/assets/sounds/romeo_and_cinderella.mp3';

onMounted(() => {
  document.title = "연이의 두근두근 ♥ 귀여운 사이트";

  const bgm = new Audio(background_music);
  bgm.loop = true;
  bgm.volume = 0.45;

  const startBgm = () => {
    bgm.play();
    document.removeEventListener('click', startBgm);
  };

  document.addEventListener('click', startBgm);
});

document.addEventListener('mousemove', e => {
  const spark = document.createElement('div');
  spark.className = 'spark';
  spark.style.left = `${e.clientX}px`;
  spark.style.top = `${e.clientY}px`;
  
  document.body.appendChild(spark);

  setTimeout(() => spark.remove(), 1000);
});

function nomade() {
  alert("아직 다 안만들어졌는데용~")
}

</script>

<template>
  <div class="spark"></div>
  <div class="welcometitle">
    <h1>연이의 귀여운 사이트</h1>
    <marquee behavior="scroll" direction="left" scrollamount="5">
      어서오세요 주인님~ ✧ ✧ ✧ 반짝반짝 귀여움 가득한 연이의 사이트에 오신걸 환영해요!
    </marquee>
  </div>

  <div class="image-container">
    <img src="@/assets/images/character_01.png" class="left"></img>
    <img src="@/assets/images/character_02.png" class="right"></img>
  </div>

  <div class="content-row">
    <div class="text-block">
      <p>♥ ♥ ♥ 화면 아무곳이나 클릭 시 노래 자동 재생 !! ♥ ♥ ♥</p>
      <h3 class="title-text">이곳은 어떤 곳이에요?</h3>
      <p>연이의 사이트에 오신걸 환영해요 !!
        <br>저는 연이라고 하고, 이곳은 저의 개인적인 기록 공간입니다.
        <br>이곳에서는 저의 귀여운 사이트와 캐릭터들, 그리고 블로그를 볼수가 있어요 !
        <br>아직 다 완성이 되진 않았지만, 게임과 상점들도 만들 예정이에요 !
      </p>
      <p>이 사이트는 데스크탑 기준으로 만들어졌습니다.
        <br>컴퓨터나 노트북으로 보시는 것을 추천드립니다 !</p>
    </div>

    <div class="navbar">
      <h3>Navbar</h3>
      <button @click="nomade">About</button>
      <button @click="nomade">Art</button>
      <button @click="nomade">Blog</button>
      <button @click="nomade">Game</button>
      <img src="@/assets/images/cute_01.gif"></img>
    </div>
  </div>

  <marquee behavior="scroll" direction="left" scrollamount="5" loop="infinite">
    <img src="@/assets/images/sticker_01.gif">
    <img src="@/assets/images/sticker_02.jpeg">
    <img src="@/assets/images/sticker_03.jpeg">
    <img src="@/assets/images/sticker_04.png">
    <img src="@/assets/images/sticker_05.gif">
    <img src="@/assets/images/sticker_06.jpeg">
    
  </marquee>

  <div>
    <p>아직 사이트를 제작중이라 여러 기기에서 호환성 검사가 되어있지 않습니다 !!
      <br>글자, 사진 등 UI 등 뭉개짐 발생 가능 !!
    </p>
  </div>

  <img src="@/assets/images/cute_03.gif" width="200px"></img>

  <div class="ending-bar">
    <marquee behavior="scroll" direction="left" scrollamount="5">
      노래: 로미오와 신데렐라 (feat.하츠네 미쿠) / 모바일 호환성 확인되지 않음.
    </marquee>
  </div>
</template>

<style>
@font-face {
  font-family: 'neodgm';
  src: url('@/assets/fonts/neodgm.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@keyframes swing-scale {
  0%   { transform: scale(1) rotate(0deg); }
  25%  { transform: scale(1.1) rotate(10deg); }
  50%  { transform: scale(1.1) rotate(-10deg); }
  75%  { transform: scale(1.1) rotate(10deg); }
  100% { transform: scale(1) rotate(0deg); }
}

@media (max-width: 768px) {
  .image-container img {
    display: none;
  }
}


body {
  background-color: pink;
  background-image: url('@/assets/images/wallpaper_01.jpg');
  background-repeat: repeat;
  background-size: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  width: 100vw;
  height: 100vh;
  font-family: 'neodgm', sans-serif;
}

* {
  cursor: url('/src/assets/images/cursor.png') 0 0, auto !important;
}

.spark {
  position: absolute;
  width: 15px;
  height: 15px;
  background: hotpink;
  clip-path: polygon(
    50% 0%, 61% 35%, 98% 35%, 68% 57%, 
    79% 91%, 50% 70%, 21% 91%, 32% 57%, 
    2% 35%, 39% 35%
  );
  pointer-events: none;
  opacity: 0.9;
  animation: fall 1s forwards;
}

@keyframes fall {
  0% { transform: translateY(0px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100px) rotate(360deg); opacity: 0; }
}

.title-text {
  color: pink;
  text-shadow: -3px 0px white;
  font-size: 1.5rem;
}

.navbar {
  border: 1px solid hotpink;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: url('@/assets/images/cute_02.png');
  width: 150px;
  height: 250px;
  float: right;
  margin-top: 50px;
}

.navbar button {
  width: 100px;
  height: 30px;
  font-family: 'neodgm', sans-serif;
  margin-top: 5px;
  margin-bottom: 5px;
  color: hotpink;
  background-color: rgb(255, 218, 224);
  border: 1px solid hotpink;
}

.content-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
}

.text-block {
  flex: 1;
}

.image-container {
  position: fixed;
  display: flex;
  gap: 20px;
  left: 0;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
  width: 100vw;
  z-index: 0;
}
.image-container img {
  width: 250px;
  height: auto;
}

.image-container img.left {
  position: absolute;
  left: 100px;
}

.image-container img.right {
  position: absolute;
  right: 100px;
  margin-top: 150px;
}

.image-container img:hover {
  animation: swing-scale 2s ease-in-out infinite;
  transform-origin: center;
}

.ending-bar {
  bottom: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 20px;
  margin-bottom: 30px;
}


</style>
