<script setup lang="ts">
import { ref } from "vue";
import { PUBLIC_DOMAIN } from "@/constants";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
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
</script>

<template>
  <div class="the-join-our-team">
    <div class="the-join-our-team__title heading_2">
      <h2>Join Our Team</h2>
    </div>
    <div class="the-join-our-team__content desktop">
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
    <Carousel
      wrap-around
      :autoplay="4000"
      class="the-join-our-team__content mobile"
    >
      <Slide v-for="(card, key) of cards" :key="key" class="card">
        <JoinOurTeamCard
          :icon="card.icon"
          :title="card.title"
          :subTitle="card.subTitle"
          :description="card.description"
          :button-text="card.buttonText"
          :button-link="card.buttonLink"
        />
      </Slide>
    </Carousel>
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

  .mobile {
    .card::before {
      display: none;
    }
  }
}

@include mobile {
  .the-join-our-team {
    margin-top: 35px;

    .desktop {
      display: none;
    }

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

    .desktop {
      display: none;
    }

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

    .desktop {
      display: none;
    }

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

    .desktop {
      display: none;
    }

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

    .mobile {
      display: none;
    }

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
