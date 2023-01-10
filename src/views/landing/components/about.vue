<template>
  <div class="z-60 bg-gray-600">
    <v-container class="py-30 text-white">
      <v-row>
        <v-col sm="12" md="6">
          <v-img :src="image"></v-img>
        </v-col>
        <v-col sm="12" md="6">
          <Title :title="'about us'" :text="'關於我們'"></Title>
          <p class="text-md leading-loose">
            協助廠商開發新產品促成商品化，縮短「產品」成為「商品」的時間落差，為產學合作及新創企業，提供從創意、創新到創業，不同發展階段的育成服務，建構完整及多元化層面的孕育平台。
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Blurb from "@/components/blurb.vue";
import Title from "@/components/title.vue";
export default {
  components: { Blurb, Title },
  data() {
    return {
      image: require("@/assets/images/about-us-img01.png"),
    };
  },
};
</script>
