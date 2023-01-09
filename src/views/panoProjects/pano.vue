<template>
  <div>
    <div>
      <VuePannellum
        :preview="
          assetURL('5e8dbf05-dcb6-482c-8668-9071d49555b9', {
            quality: 30,
            width: 1000,
          })
        "
        :src="
          scenes.length > 0
            ? assetURL(scenes[selected_scenes_index].panorama, {
                quality: $vuetify.breakpoint.mdAndUp ? 80 : 70,
                width: $vuetify.breakpoint.mdAndUp ? 5000 : 2500,
              })
            : ''
        "
        style="height: 100vh; position: fixed"
        v-if="scenes"
        @load="onLoaded"
        :autoRotate="true"
        :maxPitch="120"
        :minPitch="-60"
      >
      </VuePannellum>
    </div>

    <!-- nav bottom -->

    <div class="absolute bottom-12 p-5 z-5 text-center w-full" v-if="loaded">
      <v-btn
        class=""
        outlined
        fab
        dark
        @click="nav_bottom = !nav_bottom"
        data-aos="fade"
        data-aos-delay="1000"
      >
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-btn>
    </div>

    <v-navigation-drawer
      width="20%"
      v-model="nav_bottom"
      temporary
      bottom
      fixed
      dark
      color="rgba(0,0,0,.8)"
    >
      <NavBottom
        :slides="scenes"
        @onSlideClick="onSlideClick"
        :selected_index="selected_scenes_index"
      ></NavBottom>
    </v-navigation-drawer>

    <div
      v-if="titleShow"
      class="absolute h-30 top-30 bg-none z-0 text-gray-100 font-bold rounded-r-xl p-5 pointer-events-none touch-none"
    >
      <div
        class="text-orange-300 text-sm font-bold"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        環景導覽 View 720 Tour
      </div>
      <div class="text-2xl" data-aos="fade-right " data-aos-delay="700">
        崑山科大車用類產線
      </div>
      <div class="text-2xl" data-aos="fade-right" data-aos-delay="900">
        {{ scenes[selected_scenes_index].name }}
      </div>
    </div>

    <!-- description btn -->
    <div
      class="absolute top-30 right-0 p-5 z-5"
      v-if="loaded"
      data-aos="fade-left"
      data-aos-delay="500"
    >
      <v-btn class="" outlined fab dark @click="dialog_description = true">
        <v-icon>mdi-information-variant</v-icon>
      </v-btn>
    </div>
    <v-dialog v-model="dialog_description" scrollable>
      <v-card class="">
        <v-card-text class="pt-5 h-80vh">
          <div
            v-html="
              scenes.length > 0 ? scenes[selected_scenes_index].description : ''
            "
          ></div>
        </v-card-text>
        <v-divider class="w-3/4 mx-auto"></v-divider>
        <v-card-actions>
          <v-btn @click="dialog_description = false" class="w-full" text>
            <v-icon>mdi-window-close</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      <!-- <div class="bg-gray-100 text-gray-800 leading-relaxed p-5"></div> -->
    </v-dialog>
  </div>
</template>
<script>
import { assetURL } from "@/api/request";
import { get } from "@/api/request";
// import VuePannellum from "vue-pannellum";
import VuePannellum from "@/components/vue-pannellum.vue";
import NavBottom from "./components/navBottom.vue";
export default {
  props: ["id"],
  components: { VuePannellum, NavBottom },
  methods: {
    assetURL,
    onSceneSelect(index) {
      // if (this.selected_scenes_index == index) {
      //   return;
      // }
      // this.loaded = false;
      // this.titleShow = false;
      // console.log(this.titleShow);
      // this.nav_bottom = false;
      // this.selected_scenes_index = index;
    },
    onLoaded() {
      this.loaded = true;
      this.titleShow = true;
      console.log("loaded");
    },

    onSlideClick(value) {
      this.nav_bottom = false;
      this.loaded = false;
      this.titleShow = false;
      this.selected_scenes_index = value;
    },
  },
  // props: ["id"],
  data() {
    return {
      quality: 80,
      selected_scenes_index: 0,
      scenes: [],
      // id: "8b073cc8-6c43-4bb5-b2c8-eba6816dba38",
      loaded: false,
      titleShow: false,
      dialog_description: false,
      nav_bottom: false,
      sensorSwitch: false,
    };
  },
  computed: {},
  async created() {
    const project = await get({
      url: `pano_projects/${this.id}`,
      params: { fields: "*,scenes.*" },
    });

    this.scenes = project.scenes;
    console.log(this.scenes);
  },
};
// https://apdc.api.apdc.com.tw/assets/6dd619bb-d9a8-4fe1-b838-6ed7f2a449c2?quality=80&
// https://apdc.api.apdc.com.tw/assets/89e90305-892d-4820-9c06-b7931428156d?quality=80&
</script>
<style>
.custom-hotspot {
  height: 30px;
  width: 30px;
  background-color: #fff;
  border-radius: 3rem;
}
</style>
