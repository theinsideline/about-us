<script setup></script>

<template>
  <div class="the-hero">
    <img class="hero__background_image" src="/hero.png" alt="Hero" />

    <div class="hero__content">
      <div class="content_title">
        <h2>We Are Mountain Bikers</h2>
        <span
          >Drooling over new technology, daydreaming about our next ride and
          wrenching on bikes. We only sell what we ride, and for that reason you
          can be sure when shopping at The Inside Line that you are getting
          top-quality mountain bike products tested by everyday mountain
          bikers</span
        >
      </div>
      <div class="content__learn_more">
        <span class="learn_more">Learn More <i>↓</i></span>
      </div>
    </div>
  </div>
</template>

<style>
.the-hero {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.hero__background_image {
  width: 100vw;
  height: -webkit-fill-available;
  filter: brightness(50%);
}

.hero__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: -webkit-fill-available;
}

.content_title {
  display: flex;
  flex-direction: column;
  color: white;
  max-width: 50%;
}

.content_title h2 {
  text-align: center;
  font-family: Oswald;
  font-size: 25px;
}

.content_title span {
  text-align: center;
  font-family: Inter;
  font-size: 16px;
}

.content__learn_more {
  position: absolute;
  display: flex;
  justify-content: center;
  height: 100%;
  width: max-content;
  align-items: end;
}

.learn_more {
  color: white;
  padding-bottom: 10px;
  font-family: Inter;
  font-size: 16px;
}

i {
  animation: MoveUpDown 1s linear infinite;
  position: relative;
  left: 0;
  bottom: 0;
  margin-left: 5px;
}

@keyframes MoveUpDown {
  0%,
  100% {
    bottom: 0;
  }
  50% {
    bottom: 3px;
  }
}
</style>
