<script setup lang="ts">
import CommunityCard from "@/components/the-serving-our-community/community-card.vue";
</script>

<template>
  <div class="the-serving-out-community">
    <div class="the-serving-out-community__title">
      <h2>Serving Our Community</h2>
    </div>
    <div class="the-serving-out-community__content">
      <div class="content__row">
        <CommunityCard
          title="Home"
          description="Located in Calgary AB, we call the Rocky Mountains home. We have deep gratitude for our local trail"
          button-text="Find us"
          button-link="https://www.theinsideline.ca/service/location/"
          image="https://theeinsideline.github.io/about-us/public/Home.jpg"
        />
        <CommunityCard
          title="Keeping Your Bike Running"
          description="At The Inside Line, our goal is to make your bicycle perform to its full potential so you can have a great ride"
          button-text="Learn More"
          button-link="https://www.theinsideline.ca/service/service/"
          image="https://theeinsideline.github.io/about-us/public/Service.jpg"
        />
      </div>
      <div class="content__row">
        <CommunityCard
          title="Supporting Local Networks"
          description="If we are not out there crafting our next line we are in the shop talking about the MMBTS trail"
          button-text="MMTBS Membership"
          button-link="https://www.mmbts.com/join-mmbts"
          image="https://theeinsideline.github.io/about-us/public/Network.jpg"
        />
        <CommunityCard
          title="Equality"
          description="We firmly believe that equity in sport is important. We strive to help women enjoy mountain biking"
          button-text="Learn More"
          button-link="https://www.slaydies.com/"
          image="https://theeinsideline.github.io/about-us/public/Equality.jpg"
        />
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
