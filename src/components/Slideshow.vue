<template>
  <div class="slideshow-margin">
    <div clas="col-12">
      <div class="trees tree-1"></div>
      <div class="trees tree-2"></div>
      <div class="trees tree-3"></div>
      <div class="trees tree-4"></div>
      <div class="trees tree-5"></div>
      <div class="trees tree-6"></div>
      <div class="trees tree-7"></div>
      <div class="text-center">
        <h2>
          <b>EnergyHacks 2019</b>
        </h2>
      </div>
      <div class="text-center">
        <p>See how it went down last year!</p>
      </div>
      <div class="container col-12">
        <img
          src="~@/assets/img/website/slideshow.svg"
          id="slideshow-bg"
          class="col-12 p-0 mx-auto text-center"
        />
        <div id="carousel">
          <carousel
            :navigate-to="someLocalProperty"
            :mouse-drag="true"
            :autoplay="true"
            :paginationPosition="bottom"
            :paginationEnabled="true"
            :perPageCustom="[[320, 1], [1199, 3]]"
            :loop="true"
            :spacePadding="10"
            :centerMode="true"
            :speed="800"
            :touch-drag="true"
            :scrollPerPage="false"
          >
            <slide :key="key" v-for="(image, key) in images" id="slide-style">
              <img :src="image.pathLong" id="slideshow-img" />
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Carousel, Slide } from "vue-carousel";

export default Vue.extend({
  data() {
    return {
      images: [] as any
    };
  },
  components: {
    Carousel,
    Slide
  },
  mounted() {
    this.importAll(
      require.context("../assets/img/website/slideshow/", true, /\.png$/)
    );
  },

  methods: {
    importAll(r: any) {
      r.keys().forEach((key: any) =>
        this.images.push({ pathLong: r(key), pathShort: key })
      );
    }
  }
});
</script>

<style scoped>
.slideshow-margin {
  margin-bottom: 150px;
  position: relative;
}
#slideshow-bg {
  box-sizing: border-box;
  width: 100%;
  height: 125%;
  z-index: 0;
  position: absolute;
  margin: 20px;
}

#slide-style {
  margin-right: 10px;
  margin-left: 10px;
  z-index: 3;
  position: relative;
}

#slideshow-img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

#carousel {
  position: relative;
  z-index: 1;
  top: 70px;
}

.trees {
  position: absolute;
  z-index: 0;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
}

.tree-1 {
  background-image: url("~@/assets/img/website/tree-1.svg");
  position: absolute;
  top: 107%;
  right: 85%;
  width: 40px;
  height: 40px;
}

.tree-2 {
  background-image: url("~@/assets/img/website/tree-2.svg");
  position: absolute;
  top: 115%;
  right: 94%;
  width: 50px;
  height: 50px;
}

.tree-3 {
  background-image: url("~@/assets/img/website/tree-1.svg");
  position: absolute;
  top: 100%;
  right: 92%;
  width: 40px;
  height: 40px;
}

.tree-4 {
  background-image: url("~@/assets/img/website/tree-1.svg");
  position: absolute;
  top: 117%;
  right: 1%;
  width: 70px;
  height: 70px;
}

.tree-5 {
  background-image: url("~@/assets/img/website/tree-1.svg");
  position: absolute;
  right: 11%;
  top: 110%;
  width: 40px;
  height: 40px;
}

.tree-6 {
  background-image: url("~@/assets/img/website/tree-2.svg");
  position: absolute;
  top: 101%;
  right: 6%;
  width: 50px;
  height: 50px;
}
</style>
