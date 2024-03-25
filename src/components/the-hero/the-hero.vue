<script setup lang="ts"></script>

<template>
  <div class="the-hero">
    <img
      class="the-hero__background-image"
      src="https://theeinsideline.github.io/about-us/public/hero.png"
      alt="Hero"
    />

    <div class="the-hero__title">
      <h2>We Are Mountain Bikers</h2>
      <span
        >Drooling over new technology, daydreaming about our next ride and
        wrenching on bikes. We only sell what we ride, and for that reason you
        can be sure when shopping at The Inside Line that you are getting
        top-quality mountain bike products tested by everyday mountain
        bikers</span
      >
    </div>

    <div class="the-hero__learn-more">
      <span>Learn More <i>↓</i></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/fonts.scss";
@import "@/assets/scss/breakpoints.scss";

.the-hero {
  position: relative;
  left: calc(-50vw + 50%);

  &__background-image {
    width: 100vw;
    height: auto;
    min-height: 520px;
    filter: brightness(50%);
    z-index: 999;
    object-fit: cover;
  }

  &__title {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    cursor: default;

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

  &__learn-more {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    cursor: pointer;

    &:hover {
      color: blue;
    }

    span {
      color: white;
      font-family: Inter;
      font-size: $span_font_size;
      cursor: pointer;
      display: block;
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

@include mobile {
  .the-hero {
    &__title {
      width: 90%;
      
      h2 {
        font-size: $h2_font_size_mobile;
      }

      span {
        font-size: $span_font_size_mobile;
      }
    }

    &__learn-more {
      span {
        font-size: $span_font_size_mobile;
      }
    }
  }
}

@include tablet {
  .the-hero {
    &__title {
      width: 80%;
      
      h2 {
        font-size: $h2_font_size_mobile;
      }

      span {
        font-size: $span_font_size_mobile;
      }
    }

    &__learn-more {
      span {
        font-size: $span_font_size_mobile;
      }
    }
  }
}

@include laptop {
  .the-hero {
    &__title {
      width: 70%;
      
      h2 {
        font-size: $h2_font_size_mobile;
      }

      span {
        font-size: $span_font_size_mobile;
      }
    }

    &__learn-more {
      span {
        font-size: $span_font_size_mobile;
      }
    }
  }
}
</style>
