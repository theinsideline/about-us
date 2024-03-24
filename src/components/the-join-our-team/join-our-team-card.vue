<script setup lang="ts">
import { defineProps } from "vue";
import LinkButton from "@/components/ui/link-button.vue";

defineProps({
  icon: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  subTitle: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  buttonText: {
    type: String,
    default: "",
  },
  buttonLink: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="join-our-team-card">
    <div class="join-our-team-card__icon">
      <img :src="icon" alt="Join out ream icon" />
    </div>
    <div class="join-our-team-card__title">
      <h2>{{ title }}</h2>
    </div>
    <div class="join-our-team-card__subtitle">
      <span v-html="subTitle" />
    </div>
    <div class="join-our-team-card__description">
      <span>{{ description }}</span>
    </div>
    <div class="join-our-team-card__button-link">
      <LinkButton :text="buttonText" :link="buttonLink" />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/fonts.scss";

.join-our-team-card {
  width: 460px;
  height: 687px;
  background: #f0f0f0;
  margin: 15px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  padding-bottom: 110px;

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px;

    img {
      width: 100px;
      height: 100px;
    }
  }

  &__title {
    h2 {
      text-align: center;
      font-size: $h2_font_size;
      font-family: Oswald;
    }
  }

  &__subtitle {
    margin-bottom: 33px;
    display: flex;
    justify-content: center;

    span {
      max-width: 400px;
      text-align: center;
      font-weight: bold;
      font-size: $span_font_size;
      text-wrap: nowrap;
      font-family: Inter;
    }
  }

  &__description {
    display: flex;
    justify-content: center;
    margin-bottom: 33px;
    height: 120px;

    span {
      text-align: center;
      max-width: 400px;
      font-size: $span_font_size;
      font-family: Inter;
    }
  }

  &__button-link {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>
