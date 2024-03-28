<script setup lang="ts">
import { ref, onMounted } from "vue";
import { PUBLIC_DOMAIN } from "@/constants";

const videoRef = ref<HTMLVideoElement>();

onMounted(() => {
  if (!videoRef.value) return;

  videoRef.value.setAttribute("muted", true as unknown as string);
});

const scroll = () => {
  const communityElement = document.getElementById("community");
  if (!communityElement) return;

  const heroElement = document.getElementById("hero");
  if (!heroElement) return;

  communityElement.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>

<template>
  <div class="the-hero" id="hero">
    <video
      ref="videoRef"
      playsinline
      muted
      autoplay
      loop
      class="the-hero__background-image"
      :src="`${PUBLIC_DOMAIN}/public/videos/Hero.mp4`"
    />

    <div class="the-hero__title heading_3">
      <h3>We Are Mountain Bikers</h3>
      <span
        >Drooling over new technology, daydreaming about our next ride and
        wrenching on bikes. We only sell what we ride, and for that reason you
        can be sure when shopping at The Inside Line that you are getting
        top-quality mountain bike products tested by everyday mountain
        bikers</span
      >
    </div>

    <div class="the-hero__learn-more" @click="scroll">
      <span>Learn More <i>↓</i></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/fonts.scss";
@import "@/assets/scss/breakpoints.scss";
@import "@/assets/scss/headings.scss";

.the-hero {
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  max-height: 768px;

  &__background-image {
    width: 100vw;
    max-height: 768px;
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

    h3 {
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

    span {
      color: white;
      font-family: Inter;
      font-size: $span_font_size;
      cursor: pointer;
      display: block;
      transition: all 0.3s ease-in;

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
    min-height: 520px;

    &__background-image {
      min-height: 520px;
    }

    &__title {
      width: 90%;

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
    min-height: 620px;

    &__background-image {
      min-height: 620px;
    }

    &__title {
      width: 80%;

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
    min-height: 620px;

    &__background-image {
      min-height: 620px;
    }

    &__title {
      width: 70%;

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
