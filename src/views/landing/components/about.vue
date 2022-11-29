<template>
  <div class="z-60">
    <v-container class="py-30">
      <v-row>
        <v-col sm="12" md="6" data-aos="fade">
          <v-img :src="image"></v-img>
        </v-col>
        <v-col sm="12" md="6" class="text-gray-500" data-aos="fade">
          <div>about us</div>
          <div class="text-6xl font-thin my-5">Interactive Design</div>
          <div class="leading-loose">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ab
            nihil neque sequi cumque iste error dignissimos, fugit obcaecati
            porro officia corrupti odit totam expedita, fuga quidem, omnis non
            sapiente.
          </div>
        </v-col>
      </v-row>
      <!-- <v-row>
        <v-col md="12">
          <Blurb :delay="'100'"></Blurb>
        </v-col>
        <v-col md="6">
          <Blurb :delay="'200'"></Blurb>
        </v-col>
        <v-col md="6">
          <Blurb :delay="'300'"></Blurb>
        </v-col>
      </v-row> -->
    </v-container>
  </div>
</template>
<script>
import Blurb from "@/components/blurb.vue";
export default {
  components: { Blurb },
  data() {
    return {
      image: require("@/assets/images/about-us-img01.png"),
    };
  },
};
</script>
