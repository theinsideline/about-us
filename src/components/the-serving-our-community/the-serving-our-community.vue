<script setup lang="ts">
</script>

<template>
  <div class="the-serving-out-community">
    <div class="the-serving-out-community__title">
      <h2>Serving Our Community</h2>
    </div>
    <div class="the-serving-out-community__content">
      <div class="content__row">
       
      </div>
      <div class="content__row">
       
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/fonts.scss";

.the-serving-out-community {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    h2 {
      font-size: $h2_font_size;
      font-family: Oswald;
      text-align: center;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;

    .content {
      &__row {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
    }
  }
}
</style>
