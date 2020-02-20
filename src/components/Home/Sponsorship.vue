<template>
  <div class="col-12 text-center">
    <h2>Sponsors</h2>

    <div class="col-lg-8 col-md-10 col-sm-12 mx-auto pb-5">
      <div class="row my-4">
        <a class="col-12 mx-auto p-3" target="_blank" href="https://faire.com">
          <img class="col-12" src="@/assets/img/sponsors/faire.svg" />
        </a>
      </div>
      <div class="row my-4">
        <a
          class="col-lg-12 mx-auto p-3 d-flex align-items-stretch"
          target="_blank"
          href="http://td.ca"
        >
          <img class="col-lg-2 col-3 mx-auto" src="@/assets/img/sponsors/td.svg" />
        </a>
      </div>
      <div
        class="col-md-10 col-sm-12 mx-auto row my-4 d-flex align-items-stretch justify-content-around"
      >
        <a
          class="col-4 mx-auto p-0 p-md-3 d-flex align-items-stretch"
          target="_blank"
          href="http://do.co/studenthackathon"
        >
          <img class="col-md-10 col-12 mx-auto" src="@/assets/img/sponsors/digital_ocean.svg" />
        </a>
        <a
          class="col-4 mx-auto p-0 p-md-3 d-flex align-items-stretch"
          target="_blank"
          href="https://www.voiceflow.com/"
        >
          <img class="col-md-10 col-12 mx-auto" src="@/assets/img/sponsors/voiceflow.png" />
        </a>
        <a
          class="col-4 mx-auto p-0 p-md-3 d-flex align-items-stretch"
          target="_blank"
          href="https://www.github.com/"
        >
          <img class="col-md-10 col-12 mx-auto" src="@/assets/img/sponsors/github.svg" />
        </a>
      </div>
    </div>

    <h2 class="mt-5">Sponsorship Opportunities</h2>

    <div
      class="row col-lg-8 col-md-11 col-12 mx-auto d-flex align-items-stretch justify-content-around"
    >
      <div class="col-sm-12 col-md-4 px-3 d-flex align-items-stretch mb-1 my-md-0">
        <div class="col-12 box px-4 pb-4 box-1 shadow-md">
          <img class="logo" src="@/assets/img/website/network-icon.svg" />
          <h5 class="my-3">
            <b>Networking Opportunities</b>
          </h5>
          <p>Sponsors are welcome to network with students throughout the event. With coop’s prevalence at the University of Waterloo, the vast majority of attendees will be interested in hearing about your company.</p>
        </div>
      </div>

      <div class="col-sm-12 col-md-4 px-3 d-flex align-items-stretch mb-1 my-md-0">
        <div class="col-12 box px-4 pb-4 box-2 shadow-md">
          <img class="logo" src="@/assets/img/website/brand-awareness.svg" />
          <h5 class="my-3">
            <b>Brand Awareness</b>
          </h5>
          <p>Last year, our social media campaigns reached over 20,000 individuals and our website had over 12,000 unique pageviews. As a sponsor, your brand image will be further tied towards this initiative at scale, and will help develop positive associations with your company among the student body.</p>
        </div>
      </div>

      <div class="col-sm-12 col-md-4 px-3 d-flex align-items-stretch mb-1 my-md-0">
        <div class="col-12 box px-4 pb-4 box-3 shadow-md">
          <img class="logo" src="@/assets/img/website/marketing.svg" />
          <h5 class="my-3">
            <b>Marketing</b>
          </h5>
          <p>As a sponsor, your company brand will be at the center of this joint endeavor. Your branding will be present on any apparel present at the event and center stage on the hackathon’s website along with any promotional material.</p>
        </div>
      </div>
      <div class="trees tree-1"></div>
      <div class="trees tree-2"></div>
      <div class="trees tree-3"></div>
      <div class="trees tree-4"></div>
      <div class="trees tree-5"></div>
      <div class="trees tree-6"></div>
      <div class="trees tree-7"></div>
      <div class="trees tree-8"></div>
      <div class="trees tree-9"></div>
    </div>

    <p
      class="col-sm-10 col-md-8 col-lg-6 mx-auto mt-5 white"
    >Energy Hacks 2020 will bring forth innovative solutions and ideas to the energy industry. You can help invest in the future of energy by contacting us for more details on sponsorship opportunities and benefits available to you.</p>

    <button
      v-on:click="sponsorship"
      class="col-lg-2 col-md-6 col-sm-12 button round white-border mt-md-0 mt-2 bg-light p-1"
    >
      <b>Become a sponsor</b>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    sponsorship() {
      window.open("mailto:energyhacks@uwen.ca");
    }
  }
});
</script>

<style scoped>
.box {
  margin-top: 20%;
  background-color: #f4ffff;
  border-radius: 0.5vw;
  padding-top: 15%;
  color: #16353a;
}

.box-2 {
  color: #547c83;
}

.box-3 {
  color: #88a550;
}

.logo {
  width: 100px;
  opacity: 1;
  position: absolute;
  margin: auto;
  top: -50px;
  right: 0;
  left: 0;
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
  background-image: url("~@/assets/img/website/tree-blue-1.svg");
  position: absolute;
  top: 102%;
  right: 103%;
  width: 40px;
  height: 40px;
}

.tree-2 {
  background-image: url("~@/assets/img/website/tree-blue-2.svg");
  position: absolute;
  top: 105%;
  right: 118%;
  width: 50px;
  height: 50px;
}

.tree-3 {
  background-image: url("~@/assets/img/website/tree-blue-1.svg");
  position: absolute;
  top: 93%;
  right: 114%;
  width: 40px;
  height: 40px;
}

.tree-4 {
  background-image: url("~@/assets/img/website/tree-blue-1.svg");
  position: absolute;
  top: 107%;
  right: -22%;
  width: 70px;
  height: 70px;
}

.tree-5 {
  background-image: url("~@/assets/img/website/tree-blue-1.svg");
  position: absolute;
  right: -9%;
  top: 101%;
  width: 40px;
  height: 40px;
}

.tree-6 {
  background-image: url("~@/assets/img/website/tree-blue-2.svg");
  position: absolute;
  top: 92%;
  right: -19%;
  width: 50px;
  height: 50px;
}
</style>
