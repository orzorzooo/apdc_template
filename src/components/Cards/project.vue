<template>
  <div data-aos="zoom-in" :data-aos-delay="delay ? delay : ''">
    <div>
      <v-img
        v-if="item.files && item.files.length > 0"
        :src="
          assetURL(item.files[0].directus_files_id, { quality: 30, width: 500 })
        "
        class="h-50"
      >
      </v-img>
      <ImgIcon v-else></ImgIcon>
    </div>
    <div
      class="text-sm font-bold border-l-3 border-orange-500 px-3 text-white mt-2"
    >
      {{ item.name }}
    </div>
  </div>
</template>
<script>
import { assetURL } from "@/api/request";
import ImgIcon from "@/components/imgIcon.vue";
export default {
  components: { ImgIcon },
  methods: { assetURL },
  props: ["item", "delay"],
};
</script>
<style scoped>
.bg {
  background-image: linear-gradient(
    45deg,
    #ffffff 25%,
    #ededed 25%,
    #ededed 50%,
    #ffffff 50%,
    #ffffff 75%,
    #ededed 75%,
    #ededed 100%
  );
  background-repeat: repeat;
  background-size: 10px 10px;
}
</style>
