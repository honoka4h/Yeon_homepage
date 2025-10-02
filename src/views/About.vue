<script setup>
import { onMounted } from 'vue';
import bgms from '@/bgm.js';

onMounted(() => {
  document.title = "연이가 누구인가?!?!";

  const startBgm = () => {
    for (let key in bgms) {
      if (!bgms[key].paused) bgms[key].pause();
      bgms[key].currentTime = 0;
    }

    bgms.audio02.currentTime = 17;
    bgms.audio02.play();
    document.removeEventListener('click', startBgm);
  }

  document.addEventListener('click', startBgm);
});
</script>

<template>
    <div class="about-wrapper">
        <div class="cute-01"></div>
        <div class="main-container">
            <h2>연이라는 사람은 누구인가?</h2>
            <h3>연, 그는 세계체강zi존킹왕짱으로 불리는 전설의 사람..
                <br>우리 취재진은 그 전설을 알아보기 위해 취재하러 떠났다.</h3>
            <p>-안녕하세요, 당신은 누구시죠?
                <br><br>-여긴 저에 대한 공간인데용? 저는 잼미니에용~ ㅇㅉ티비 ㅈㅉ티비
                <br>저는 18살이구여 좀비고 로블록스 마인크래프트 복돌판 좋아하는데여~
                <br><br>-아 네;; 잼민이 냄새 나서 취재 못하겠네요;
            </p>

            <RouterLink to="/" class="back-text">돌아가던지 말던징</RouterLink>
        </div>
        <div class="ending-bar">
            <marquee behavior="scroll" direction="left" scrollamount="5">
                노래: Nightcore - Barbie girl / 모바일 호환성 확인되지 않음.
            </marquee>
        </div>
    </div>
</template>

<style scoped>

.about-wrapper {
    background-color: green;
    background-image: url('@/assets/images/wallpaper_02.jpg');
    background-repeat: repeat;
    background-size: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    font-family: 'neodgm', sans-serif;
}

.cute-01 {
  background-image: url('@/assets/images/main_02.gif');
  background-repeat: repeat;
  background-size: contain;
  height: 50px;
  width: 100vw;
  left: 0;
  position: absolute;
}

.main-container {
    margin-top: 60px;
}

.back-text{
    font-size: 20px;
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