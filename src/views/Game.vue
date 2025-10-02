<script setup>
import { onMounted } from 'vue';
import bgms from '@/bgm.js';

onMounted(() => {
  document.title = "연이 키우기 시뮬레이터 (육아체험)";

  const startBgm = () => {
    for (let key in bgms) {
      if (!bgms[key].paused) bgms[key].pause();
      bgms[key].currentTime = 0;
    }

    bgms.audio03.currentTime = 15;
    bgms.audio03.play();
    document.removeEventListener('click', startBgm);
  }

  document.addEventListener('click', startBgm);
});
</script>

<template>
    <div class="about-wrapper">
        <div class="cute-01"></div>
        <div class="main-container">
            <h2>육아체험 시뮬레이터 (연이 키우기)</h2>

            <iframe width="314" height="321" scrolling="no" src="https://gifypet.neocities.org/pet/pet.html?name=Yeon&dob=1759394133&gender=f&element=Fire&pet=hamster.gif&map=tree.jpg&background=gify.jpg&tablecolor=%23ff6b6b&textcolor=black" frameborder="0"></iframe>

            <br>

            <RouterLink to="/" class="back-text">금쪽이 육아 때려치우고 떠나기</RouterLink>

            <div class="ending-bar">
                <marquee behavior="scroll" direction="left" scrollamount="5">
                    노래: OPEN DREAM LAND - SOLAMI SMILE / 모바일 호환성 확인되지 않음.
                </marquee>
            </div>
        </div>
    </div>
</template>

<style scoped>

.about-wrapper {
    background-color: green;
    background-image: url('@/assets/images/wallpaper_03.jpg');
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
  background-image: url('@/assets/images/main_03.png');
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