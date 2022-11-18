<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <transition name="fade" @enter="enter">
        <router-view />
      </transition>
      <!-- <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component"></component>
        </transition>
      </router-view> -->
      <!-- <router-view class="view" /> -->
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import AOS from "aos";
export default {
  name: "App",
  components: { Navbar },

  data: () => ({
    loaded: true,
    //
  }),
  methods: {
    enter: function (el, done) {
      setTimeout(function () {
        AOS.refresh({});
      }, 600);
      console.log("fuck");
      this.loaded = true;
      done();
    },
  },
  beforeDestroy() {
    this.loaded = false;
  },
};
</script>
<style>
.fade-enter-active {
  transition: opacity 0.2s ease;
}
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
