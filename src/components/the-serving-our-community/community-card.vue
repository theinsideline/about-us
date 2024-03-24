<script setup lang="ts">
import { defineProps } from "vue";
import LinkButton from "@/components/ui/link-button.vue";

defineProps({
  title: {
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
  image: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="community-card" :style="{ 'background-image': `url(${image})` }">
    <div class="community-card__title">
      <h2>{{ title }}</h2>
    </div>
    <div class="community-card__description">
      <span>{{ description }}</span>
    </div>
    <div class="community-card__button">
      <LinkButton :text="buttonText" :link="buttonLink" />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/fonts.scss";

.community-card {
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin: 15px;
  height: 470px;
  justify-content: flex-end;
  background-position: top;
  background-size: 100%;
  background-repeat: no-repeat;

  &__title {
    cursor: default;
    text-align: center;

    h2 {
      font-size: $h2_font_size;
      font-family: Oswald;
      text-align: center;
    }
  }

  &__description {
    max-width: 625px;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    cursor: default;

    span {
      font-size: $span_font_size;
      font-family: Inter;
      text-align: center;
    }
  }

  &__button {
    display: flex;
    justify-content: center;
  }
}
</style>
