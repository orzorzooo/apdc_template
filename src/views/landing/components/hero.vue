<template>
  <div class="h-100vh bg-orange-400">
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
                    <div class="text-6xl font-bold text-left">
                      {{ slide.title }}
                    </div>
                    <div>
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
          title: "APDC",
          content: "lorem",
          image: require("@/assets/images/landing-hero-bg.png"),
        },
        {
          title: "Interactive",
          content: "lorem",
          image: require("@/assets/images/feature-img-01.png"),
        },
      ],
    };
  },
};
</script>
