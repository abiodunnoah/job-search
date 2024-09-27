<template>
  <div>
    <!-- <MainNav></MainNav> -->
    <main-nav />
    <hero />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import Hero from "./components/Hero.vue";

export default {
  name: "App",
  components: {
    // MainNav: MainNav,
    MainNav,
    Hero,
  },
};
</script>
