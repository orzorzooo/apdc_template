<template>
  <div
    ref="navbar"
    class="transition fixed w-full z-60 bg-gray-200"
    :class="{
      'bg-opacity-0': $route.meta.disableNavEffect ? false : true,
      'text-white': $route.meta.disableNavEffect ? false : true,
      'text-gray-500': $route.meta.disableNavEffect,
    }"
  >
    <!-- standard -->
    <div class="h-20">
      <div
        class="flex h-full px-20 justify-between items-center"
        v-if="$vuetify.breakpoint.mdAndUp"
      >
        <NavItem :routeName="'landing'"
          ><div class="text-2xl font-bold">APDC</div></NavItem
        >
        <v-spacer></v-spacer>

        <NavItem
          v-for="(item, i) in routes"
          :key="i"
          :routeName="item.routeName"
          ><div class="text-md">{{ item.title }}</div></NavItem
        >
      </div>

      <!-- MOBILE -->

      <div v-else class="flex h-full w-full px-5 items-center">
        <NavItem :routeName="'landing'"
          ><div class="text-2xl font-bold">APDC</div></NavItem
        >
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon
          :dark="!scroll"
          class=""
          @click="drawer = true"
        ></v-app-bar-nav-icon>
      </div>
      <v-navigation-drawer v-model="drawer" right absolute dark height="100vh">
        <div class="w-full py-10">
          <v-list>
            <v-list-item link>
              <NavItem :routeName="'landing'"
                ><div class="text-xl font-bold text-orange-200/70">
                  首頁
                </div></NavItem
              >
            </v-list-item>
            <v-divider dark class="mb-5"></v-divider>
            <v-list-item link v-for="(item, i) in routes" :key="i">
              <NavItem :routeName="item.routeName"
                ><div class="text-xl font-bold text-orange-200/70">
                  {{ item.title }}
                </div></NavItem
              >
            </v-list-item>
          </v-list>
        </div>
      </v-navigation-drawer>
    </div>
  </div>
</template>
<script>
import NavItem from "./components/navItem.vue";
export default {
  components: { NavItem },
  data() {
    return {
      company_name: "PANDA",
      scroll: false,
      drawer: false,
      routes: [
        { title: "專案works", routeName: "projects" },
        { title: "環景導覽", routeName: "panoProjects" },
        { title: "車用類產線AR", routeName: "autoPartAR" },
        // { title: "test01", routeName: "landing" },
      ],
    };
  },
  methods: {
    onScrollTrigger(navbar, value) {
      if (window.pageYOffset > value && !this.$route.meta.disableNavEffect) {
        navbar.classList.add("bg-opacity-100", "text-gray-500");
        this.scroll = true;
      } else {
        navbar.classList.remove("bg-opacity-100", "text-gray-500");
        this.scroll = false;
      }
    },
  },
  mounted() {
    const _this = this;
    const navbar = this.$refs.navbar;
    _this.onScrollTrigger(navbar, 100);
    window.addEventListener("scroll", () => {
      _this.onScrollTrigger(navbar, 100);
    });
  },
};
</script>
