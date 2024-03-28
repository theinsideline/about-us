<script setup lang="ts">
import { onMounted, ref } from "vue";
import { PUBLIC_DOMAIN } from "@/constants";
import JoinOurTeamCard from "@/components/the-join-our-team/join-our-team-card.vue";

const cards = ref([
  {
    icon: `${PUBLIC_DOMAIN}/public/icons/Icons_Flame.svg`,
    title: "Careers",
    subTitle: "Passions for bikes? Want to work in the industry?",
    description:
      "Hang out with us every day with a carrier at The Inside Line. Bring your passion to the workplace",
    buttonText: "Careers",
    buttonLink: "https://www.theinsideline.ca/service/careers/",
  },
  {
    icon: `${PUBLIC_DOMAIN}/public/icons/Icons_Flag.svg`,
    title: "Ambassadors",
    subTitle: "Grassroots racing?  Local hero? Social media influencer?",
    description:
      "Ride for us through our ambassador program. Get deals on bikes, components and apparel to keep your passion alive.",
    buttonText: "Apply Now",
    buttonLink: "",
  },
  {
    icon: `${PUBLIC_DOMAIN}/public/icons/Icons_Community.svg`,
    title: "Affiliates",
    subTitle: "Producing content? Strong media presence?",
    description:
      "Link to your favourite products in your videos, photos and written content and make commission",
    buttonText: "Apply Now",
    buttonLink: "",
  },
]);

const needAutoSlide = ref(true);
const currentIndex = ref(0);
const next = ref(true);
const sliderElement = ref<HTMLDivElement>();
const isSliding = ref(false);

const autoScroll = () => {
  setInterval(() => {
    if (!needAutoSlide.value) return;
    if (!sliderElement.value) return;

    isSliding.value = true;

    if (currentIndex.value === 0) next.value = true;
    if (currentIndex.value === cards.value.length - 1) next.value = false;

    if (next.value) currentIndex.value += 1;
    else currentIndex.value -= 1;

    const slides = Array.from(sliderElement.value.children);

    const currentSlide = slides[currentIndex.value];

    const slideWidth = currentSlide.getBoundingClientRect().x;

    sliderElement.value?.scroll({ left: slideWidth, behavior: "smooth" });

    isSliding.value = false;
  }, 4000);
};

const scrolling = () => {
  needAutoSlide.value = false;
};

onMounted(() => autoScroll());
</script>

<template>
  <div class="the-join-our-team">
    <div class="the-join-our-team__title heading_2">
      <h2>Join Our Team</h2>
    </div>
    <div
      class="the-join-our-team__content"
      ref="sliderElement"
      @touchstart="scrolling"
    >
      <JoinOurTeamCard
        v-for="(card, key) of cards"
        :key="key"
        class="card"
        :icon="card.icon"
        :title="card.title"
        :subTitle="card.subTitle"
        :description="card.description"
        :button-text="card.buttonText"
        :button-link="card.buttonLink"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/fonts.scss";
@import "@/assets/scss/breakpoints.scss";
@import "@/assets/scss/headings.scss";

.the-join-our-team {
  &__content {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    overflow: scroll;
  }
}

@include mobile {
  .the-join-our-team {
    margin-top: 35px;

    &__content {
      .card {
        margin: 10px;

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}

@include tablet {
  .the-join-our-team {
    margin-top: 45px;

    &__content {
      margin: 0;

      .card {
        &:first-child {
          margin-left: 0;
          margin-right: 20px;
        }

        &:last-child {
          margin-right: 0;
          margin-left: 20px;
        }
      }
    }
  }
}

@include laptop {
  .the-join-our-team {
    margin-top: 25px;

    &__content {
      margin: 0;

      .card {
        &:first-child {
          margin-left: 0;
          margin-right: 20px;
        }

        &:last-child {
          margin-right: 0;
          margin-left: 20px;
        }
      }
    }
  }
}

@include desktop {
  .the-join-our-team {
    margin-top: 25px;

    &__content {
      margin: 0;

      .card {
        &:first-child {
          margin-left: 0;
          margin-right: 20px;
        }

        &:last-child {
          margin-right: 0;
          margin-left: 20px;
        }
      }
    }
  }
}

@include tv {
  .the-join-our-team {
    margin-top: 35px;

    &__content {
      margin: 0;
      justify-content: center;
      align-items: center;
      overflow: inherit;
      width: 100%;

      .card {
        &:first-child {
          margin-left: 0;
          margin-right: 30px;
        }

        &:last-child {
          margin-right: 0;
          margin-left: 30px;
        }
      }
    }
  }
}
</style>
