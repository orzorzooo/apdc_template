<template>
  <v-app>
    <div></div>
    <Navbar></Navbar>
    <v-main>
      <router-view />
    </v-main>
    <Footer v-if="!$route.meta.hideFooter"></Footer>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer.vue";
import AOS from "aos";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: { Navbar, Footer },
  computed: {
    ...mapGetters("layout", ["layout"]),
  },
  data: () => ({
    loaded: true,
    //
  }),
  methods: {
    enter: function (el, done) {
      setTimeout(function () {
        AOS.refresh({});
      }, 600);
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
.theme--light.v-application {
  background: none;
}
.v-application--wrap {
  height: 500px;
}
</style>
