<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  text: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <a class="link-button" :href="link">{{ text }} <i>--></i></a>
</template>

<style lang="scss">
@import "@/assets/scss/fonts.scss";

.link-button {
  cursor: pointer;
  text-decoration: none;
  color: white;
  background: black;
  text-align: center;
  width: 100%;
  max-width: 350px;
  padding: 15px;
  border-radius: 30px;
  font-family: Inter;
  font-size: $link_button_font_size;

  &:hover {
    background: #747474;
    transition: all 0.3s linear;

    i {
      animation: MoveUpDown 1s linear infinite;
      position: relative;
      right: 0;
    }

    @keyframes MoveUpDown {
      0%,
      100% {
        right: 0;
      }
      50% {
        right: -3px;
      }
    }
  }
}
</style>
