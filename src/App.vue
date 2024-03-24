<template>
  <div>
    <TheHero />
    <TheServingOurCommunity />
    <TheJoinOurTeam />
  </div>
</template>

<script lang="ts">
import TheHero from "@/components/the-hero/the-hero.vue";
import TheServingOurCommunity from "@/components/the-serving-our-community/the-serving-our-community.vue";
import TheJoinOurTeam from "@/components/the-join-our-team/the-join-our-team.vue";

export default {
  components: {
    TheHero,
    TheServingOurCommunity,
    TheJoinOurTeam,
  },
};
</script>

<style>
#about_us {
  margin-left: auto;
  margin-left: auto;
}
</style>
