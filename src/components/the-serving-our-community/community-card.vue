<script setup lang="ts">
import { defineProps } from "vue";
import { LinkButton } from "@theinsideline/common";

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
  <a
    class="community-card"
    :href="buttonLink"
    :style="{ 'background-image': `url(${image})` }"
  >
    <div class="community-card__title heading_3">
      <h3>{{ title }}</h3>
    </div>
    <div class="community-card__description paragraph">
      <span>{{ description }}</span>
    </div>
    <div class="community-card__button">
      <LinkButton :text="buttonText" :link="buttonLink" />
    </div>
  </a>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/headings.scss";
@import "@/assets/scss/paragraph.scss";

.community-card {
  display: flex;
  flex-direction: column;
  padding: 30px;
  height: 470px;
  justify-content: flex-end;
  background-position: top;
  background-size: 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  text-decoration: none;
  color: black;

  &__button {
    display: flex;
    justify-content: center;
  }
}

@include mobile {
  .community-card {
    padding: 20px;
    height: 350px;
  }
}

@include tablet {
  .community-card {
    height: 364px;
    width: 100%;
    padding: 20px;
  }
}

@include laptop {
  .community-card {
    height: 350px;
    padding: 20px;
    max-width: calc(((100vw - 2 * var(--component-padding)) / 2) - 20px);
    margin-bottom: 20px;
  }
}

@include desktop {
  .community-card {
    height: 350px;
    padding: 20px;
    max-width: calc(((100vw - 2 * var(--component-padding)) / 2) - 20px);
    margin-bottom: 20px;
  }
}

@include tv {
  .community-card {
    height: 470px;
    padding: 40px;
    width: 100%;
    max-width: 705px;
    margin-bottom: 30px;
  }
}
</style>
