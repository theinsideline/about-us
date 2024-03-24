<script setup lang="ts">
import { ref } from "vue";
import JoinOurTeamCard from "@/components/the-join-our-team/join-our-team-card.vue";

const cards = ref([
  {
    icon: "/Icons_Flame.svg",
    title: "Careers",
    subTitle: "Passions for bikes?<wbr/>Want to work in the industry?",
    description:
      "Hang out with us every day with a carrier at The Inside Line. Bring your passion to the workplace",
    buttonText: "Careers",
    buttonLink: "https://www.theinsideline.ca/service/careers/",
  },
  {
    icon: "/Icons_Flag.svg",
    title: "Ambassadors",
    subTitle: "Grassroots racing?<wbr/> Local hero?<wbr/>Social media influencer?",
    description:
      "Ride for us through our ambassador program. Get deals on bikes, components and apparel to keep your passion alive. Ride our brands!",
    buttonText: "Apply Now",
    buttonLink: "",
  },
  {
    icon: "/Icons_Community.svg",
    title: "Affiliates",
    subTitle: "Producing content?<wbr/>Strong media presence?",
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

<style lang="scss">
@import "@/assets/scss/fonts.scss";

.the-join-our-team {
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
    flex-wrap: nowrap;
  }
}
</style>
