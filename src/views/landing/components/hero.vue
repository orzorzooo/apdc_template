<template>
  <div class="h-100vh bg-gray-800">
    <div class="">
      <vueper-slides
        fade
        fixed-height="100vh"
        :parallax="true"
        :bullets="false"
        :arrows="false"
        :infinite="true"
        :autoplay="true"
        :pauseOnHover="false"
        :pauseOnTouch="false"
        class="no-shadow"
      >
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :title="slide.title"
          :content="slide.content"
        >
          <template #content>
            <v-img :src="slide.image" height="100%">
              <v-container class="h-full text-white">
                <v-row class="h-full" align="center">
                  <v-col sm="12" md="6">
                    <div
                      class="text-8xl font-bold text-orange-500 text-left"
                      data-aos="fade-right"
                      data-aos-delay="100"
                      data-aos-offset="-300"
                    >
                      APDC
                    </div>
                    <div
                      class="text-4xl font-bold text-left"
                      data-aos="fade-right"
                      data-aos-delay="200"
                      data-aos-offset="-300"
                    >
                      數位製造實驗室
                    </div>
                    <div
                      class="border-t-1 border-orange-500 my-5"
                      data-aos="fade-right"
                      data-aos-delay="300"
                      data-aos-offset="-300"
                    ></div>
                    <div
                      class="text-xl font-bold"
                      data-aos="fade-right"
                      data-aos-delay="400"
                      data-aos-offset="-300"
                    >
                      {{ slide.content }}
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-img>
          </template>
        </vueper-slide>
      </vueper-slides>
      <!-- <v-img :src="bg" height="100vh">
        <v-container class="h-full text-white">
          <v-row class="h-full" align="center">
            <v-col sm="12" md="6">
              <div
                class="text-6xl font-bold text-left"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                APDC
              </div>
              <div data-aos="fade-right">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
                nesciunt? Id quibusdam provident consequatur dolore ipsa harum
                praesentium sequi odio eaque doloremque repellat, porro at ad
                veniam corporis. Fugiat, dolore?
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-img> -->
    </div>
  </div>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      slides: [
        {
          title: "APDC數位製造實驗室",
          content: "創新產品開發、創意產業規劃及整合行銷決策商業模式導入",
          image: require("@/assets/images/landing-hero-bg.png"),
        },
        // {
        //   title: "APDC數位製造實驗室",
        //   content: "lorem",
        //   image: require("@/assets/images/feature-img-01.png"),
        // },
      ],
    };
  },
};
</script>
