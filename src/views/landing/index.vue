<template>
  <div>
    <Hero></Hero>
    <!-- <SkewedDivider></SkewedDivider> -->
    <About></About>
    <Feature></Feature>
    <Projects></Projects>
  </div>
</template>

<script>
import Hero from "./components/hero.vue";
import Feature from "./components/feature.vue";
import About from "./components/about.vue";
import SkewedDivider from "@/components/Dividers/skewed.vue";
import Projects from "./components/projects.vue";
export default {
  components: { Hero, Feature, About, SkewedDivider, Projects },
};
</script>
