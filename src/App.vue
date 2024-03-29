<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const headerElement = document.querySelector("h1.margin-bottom-sm");
  if (!headerElement) return;

  const header = (headerElement.textContent || "").toLowerCase();
  if (!header.length) return;

  if (!header.includes("about us")) return;

  headerElement.remove();

  const section = document.querySelector("section.section-control.container");
  if (!section) return;

  section.classList.add("padding-top-null");
});
</script>

<template>
  <TheHero />
  <TheServingOurCommunity />
  <TheJoinOurTeam />
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
.padding-top-null {
  padding-top: 0 !important;
}

#about_us {
  margin-left: auto;
  margin-right: auto;
}
</style>
