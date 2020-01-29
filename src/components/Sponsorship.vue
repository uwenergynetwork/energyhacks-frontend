<template>
  <div class="col-12 text-center">
    <h2>Sponsorship Opportunities</h2>
    
    <p class="col-sm-10 col-md-6 mx-auto mb-5">We recognize that this event would not be possible without the generous help of our sponsors and in return we aim to provide value back in various forms.</p>
    
    <div class="row col-md-8 col-12 mx-auto d-flex align-items-stretch justify-content-around">

      <div class="col-sm-12 col-md-4 px-3 d-flex align-items-stretch my-3 my-md-0">
        <div class="col-12 box px-4 pb-4 box-1 shadow-md">
          <img class="logo" src="@/assets/img/website/network-icon.svg"/>
          <h5 class="my-3"><b>Networking Opportunities</b></h5>
          <p>Sponsors are welcome to network with students throughout the event. With coop’s prevalence at the University of Waterloo, the vast majority of attendees will be interested in hearing about your company.</p>
        </div>
      </div>

      <div class="col-sm-12 col-md-4 px-3 d-flex align-items-stretch my-3 my-md-0">
        <div class="col-12 box px-4 pb-4 box-2 shadow-md">
          <img class="logo" src="@/assets/img/website/brand-awareness.svg"/>
          <h5 class="my-3"><b>Brand Awareness</b></h5>
          <p>As a sponsor, your company brand will be at the center of this joint endeavor. Your branding will be present on any apparel present at the event and center stage on the hackathon’s website along with any promotional material.</p>
        </div>
      </div>

      <div class="col-sm-12 col-md-4 px-3 d-flex align-items-stretch my-3 my-md-0">
        <div class="col-12 box px-4 pb-4 box-3 shadow-md">
          <img class="logo" src="@/assets/img/website/marketing.svg"/>
          <h5 class="my-3"><b>Networking</b></h5>
          <p>As a sponsor, your company brand will be at the center of this joint endeavor. Your branding will be present on any apparel present at the event and center stage on the hackathon’s website along with any promotional material.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
});
</script>

<style scoped>
  .box {
    margin-top: 8vh;
    background-color: #F4FFFF;
    border-radius: 0.5vw;
    padding-top: 10vh;
  }

  .box-1 {
    color: #16353A;
  }

  .box-2 {
    color: #547C83;
  }

  .box-3 {
    color: #88A550;
  }

  .logo {
    height: 16vh;
    opacity: 1;
    position: absolute;
    margin: auto;
    top: -8vh;
    right :0;
    left: 0;
  }
</style>
