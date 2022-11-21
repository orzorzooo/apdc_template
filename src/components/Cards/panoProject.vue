<template>
  <div data-aos="zoom-in" :data-aos-delay="delay ? delay : ''">
    <div>
      <v-img
        v-if="item.image"
        :src="assetURL(item.image, { quality: 30, width: 500 })"
        height="300px"
      >
      </v-img>
    </div>
    <div
      class="w-full bg-stone-600/70 p-5 text-white flex2 justify-between content-end"
    >
      <div class="self-end">
        <h2 class="font-bold text-orange-300/90 w-full">
          {{ item.name ? item.name : "" }}
        </h2>
        <p class="text-white mb-0">
          {{ item.description ? item.description : "" }}
        </p>
      </div>
      <!-- <div class="self-end">
        <h3 class="text-xl">$ {{ item.price ? item.price : "" }} / 月</h3>
      </div> -->
    </div>
  </div>
</template>
<script>
import { assetURL } from "@/api/request";
export default {
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
