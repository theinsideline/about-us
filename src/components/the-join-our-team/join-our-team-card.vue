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
  <a :href="buttonLink" class="join-our-team-card">
    <div class="join-our-team-card__icon">
      <img :src="icon" alt="Join out ream icon" />
    </div>
    <div class="join-our-team-card__title heading_3">
      <h3>{{ title }}</h3>
    </div>
    <div class="join-our-team-card__subtitle paragraph">
      <span>{{ subTitle }}</span>
    </div>
    <div class="join-our-team-card__description paragraph">
      <span>{{ description }}</span>
    </div>
    <div class="join-our-team-card__button-link">
      <LinkButton :text="buttonText" :link="buttonLink" />
    </div>
  </a>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/fonts.scss";
@import "@/assets/scss/breakpoints.scss";
@import "@/assets/scss/headings.scss";
@import "@/assets/scss/paragraph.scss";

.join-our-team-card {
  width: 460px;
  background: #f0f0f0;
  padding: 30px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 80px;
  text-decoration: none;
  color: black;
  flex: none;
  margin-top: 0 !important;

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px;

    img {
      width: 100px;
      height: 100px;
    }
  }

  &__subtitle {
    display: flex;
    justify-content: center;

    span {
      max-width: 400px;
      font-weight: bold;
    }
  }

  &__description {
    display: flex;
  }

  &__button-link {
    margin-top: auto;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

@include mobile {
  .join-our-team-card {
    width: calc(100vw - 2 * var(--component-padding));
    max-height: 420px;
    padding-top: 20px;
    padding-bottom: 60px;

    &__icon {
      margin: 0;
      margin-bottom: 15px;

      img {
        width: 70px;
        height: 70px;
      }
    }

    &__title {
      margin-bottom: 15px;
    }

    &__subtitle {
      margin-bottom: 11px;

      span {
        height: 60px;
      }
    }

    &__description {
      margin-bottom: 15px;

      span {
        height: 100px;
      }
    }
  }
}

@include tablet {
  .join-our-team-card {
    display: inline-block;
    width: 479px;
    height: 471px;
    padding-top: 40px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 80px;

    &__icon {
      margin: 0;
      margin-bottom: 20px;

      img {
        width: 80px;
        height: 80px;
      }
    }

    &__title {
      margin-bottom: 20px;
    }

    &__subtitle {
      margin-bottom: 11px;

      span {
        height: 46px;
      }
    }

    &__description {
      margin-bottom: 20px;

      span {
        height: 70px;
      }
    }
  }
}

@include laptop {
  .join-our-team-card {
    display: inline-block;
    width: calc(((100vw - 2 * var(--component-padding)) / 2) - 10px);
    height: 471px;
    padding-top: 40px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 80px;

    &__icon {
      margin: 0;
      margin-bottom: 20px;

      img {
        width: 80px;
        height: 80px;
      }
    }

    &__title {
      margin-bottom: 20px;
    }

    &__subtitle {
      margin-bottom: 11px;

      span {
        height: 46px;
      }
    }

    &__description {
      margin: 0;
      margin-bottom: 20px;

      span {
        height: 70px;
      }
    }
  }
}

@include desktop {
  .join-our-team-card {
    display: inline-block;
    width: calc(((100vw - 2 * var(--component-padding)) / 2) - 10px);
    height: 471px;
    padding-top: 40px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 80px;

    &__icon {
      margin: 0;
      margin-bottom: 20px;

      img {
        width: 80px;
        height: 80px;
      }
    }

    &__title {
      margin-bottom: 20px;
    }

    &__subtitle {
      margin-bottom: 11px;

      span {
        height: 46px;
      }
    }

    &__description {
      margin-bottom: 20px;

      span {
        height: 70px;
      }
    }
  }
}

@include tv {
  .join-our-team-card {
    display: inline-block;
    width: calc((100vw - 2 * var(--component-padding)) / 3 - 60px);
    max-width: 460px;
    height: 687px;
    padding-top: 60px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 120px;

    &__icon {
      margin: 0;
      margin-bottom: 30px;

      img {
        width: 100px;
        height: 100px;
      }
    }

    &__title {
      margin-bottom: 30px;
    }

    &__subtitle {
      margin-bottom: 22px;

      span {
        height: 84px;
      }
    }

    &__description {
      margin-bottom: 30px;

      span {
        height: 140px;
      }
    }
  }
}
</style>
