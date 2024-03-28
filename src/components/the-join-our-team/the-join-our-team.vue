<script setup lang="ts">
import { ref } from "vue";
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
</script>

<template>
  <div class="the-join-our-team">
    <div class="the-join-our-team__title">
      <h2>Join Our Team</h2>
    </div>
    <div class="the-join-our-team__content">
      <JoinOurTeamCard
        v-for="(card, key) of cards"
        class="card"
        :key="key"
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

.the-join-our-team {
  &__title {
    h2 {
      font-size: $h2_font_size_title;
      font-family: Oswald;
      text-align: center;
    }
  }

  &__content {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    overflow: scroll;

    &::-webkit-scrollbar-thumb {
      height: 2px !important;
    }
  }
}

@include mobile {
  .the-join-our-team {
    &__title {
      margin-bottom: 15px;

      h2 {
        font-size: $h2_font_size_mobile_title;
      }
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
    &__title {
      margin-bottom: 20px;

      h2 {
        font-size: $h2_font_size_tablet_title;
      }
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
    &__title {
      margin-bottom: 20px;

      h2 {
        font-size: $h2_font_size_tablet_title;
      }
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
    &__title {
      margin-bottom: 20px;

      h2 {
        font-size: $h2_font_size_tablet_title;
      }
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
    margin-top: 65px;

    &__title {
      margin-bottom: 30px;

      h2 {
        font-size: $h2_font_size_title;
      }
    }

    &__content {
      justify-content: center;
      align-items: center;
      overflow: inherit;
      width: 100%;
    }

    &__content {
      margin: 0;

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
