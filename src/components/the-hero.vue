<script setup lang="ts"></script>

<template>
  <div class="the-hero">
    <img
      class="the-hero__background-image"
      src="https://theeinsideline.github.io/about-us/public/hero.png"
      alt="Hero"
    />

    <div class="the-hero__content">
      <div class="content__title">
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
        <span>Learn More <i>↓</i></span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/fonts.scss";

.the-hero {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);

  &__background-image {
    width: 100vw;
    height: -webkit-fill-available;
    filter: brightness(50%);
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: -webkit-fill-available;

    .content {
      &__title {
        display: flex;
        flex-direction: column;
        color: white;
        max-width: 50%;

        h2 {
          text-align: center;
          font-family: Oswald;
          font-size: $h2_font_size;
          color: white;
        }

        span {
          text-align: center;
          font-family: Inter;
          font-size: $span_font_size;
          color: white;
        }
      }

      &__learn_more {
        position: absolute;
        display: flex;
        justify-content: center;
        height: 100%;
        width: max-content;
        align-items: end;

        span {
          color: white;
          padding-bottom: 10px;
          font-family: Inter;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease-in;

          &:hover {
            transform: scale(1.2, 1.2);
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
        }
      }
    }
  }
}
</style>
