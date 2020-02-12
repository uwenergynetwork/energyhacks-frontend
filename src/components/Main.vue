<template>
  <div>
    <div class="bg-blue">
      <div id="cloud-1" class="clouds left-right"></div>
      <div class="birds left-right"></div>
      <div id="cloud-2" class="clouds left-right"></div>
      <div id="cloud-3" class="clouds left-right"></div>
      <div id="cloud-4" class="clouds left-right"></div>
      <div ></div>
      <div class="pt-2">
        <NavBar />
        <div class="col-12 row m-0">
          <Jumbotron class="offset-md-1 offset-lg-2 my-4 align-self-center" />
        </div>
        <div class="col-12 valley row m-0">
          <MailSignup class="my-lg-auto pb-5 offset-md-1 offset-lg-2" />
        </div>
      </div>
    </div>

    <div class="bg-gradient pt-5">
      <Information id="about" class="mb-5" />
      <HowItWorks id="how-it-works" class="mt-5 pt-5" />
      <Slideshow id="slideshow" class="mt-5 pt-5" />
      <Faq id="faq" class="mt-5" />
    </div>

    <div class="bg-gradient-2 pt-5">
      <Sponsorship id="sponsor" class="mb-5 pt-5" />
      <Footer class="mt-5" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "./NavBar.vue";
import Jumbotron from "./Jumbotron.vue";
import MailSignup from "./MailSignup.vue";
import Information from "./Information.vue";
import HowItWorks from "./HowItWorks.vue";
import Slideshow from "./Slideshow.vue";
import Faq from "./Faq.vue";
import Sponsorship from "./Sponsorship.vue";
import Footer from "./Footer.vue";

export default Vue.extend({
  name: "main",
  components: {
    NavBar,
    Jumbotron,
    MailSignup,
    Information,
    HowItWorks,
    Slideshow,
    Faq,
    Sponsorship,
    Footer
  }
});
</script>

<style>
  body::-webkit-scrollbar {
    display: none;
  }

  body {
    -ms-overflow-style: none;
  }

  .bg-blue {
    background-color: #f4ffff;
    overflow-x: hidden;
    position: relative;
  }

  .bg-gradient {
    background-image: linear-gradient(#88a550, #c4dcdc);
  }

  .bg-gradient-2 {
    background-image: linear-gradient(#c4dcdc, #16353a);
  }

  .valley {
    background-image: url("~@/assets/img/website/background.png");
    background-size: contain;
    background-repeat: repeat-x;
    background-position: center bottom;
    min-height: 500px;
  }

  .birds {
    position: absolute;
    top: 100px;
    z-index: 0;
    width: 60px;
    height: 60px;
    background-image: url("~@/assets/img/website/birds.svg");
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: contain;
    overflow: hidden;
  }

  #cloud-1 {
    background-image: url("~@/assets/img/website/cloud-1.svg");
    animation-duration: 80s;
    animation-delay: -4s;
    top: 0px; 
    width: 300px;
    height: 200px;
  }

  #cloud-2 {
    background-image: url("~@/assets/img/website/cloud-4.svg");
    animation-duration: 100s;
    animation-delay: -6s;
    top: 10px; 
    width: 200px;
    height: 200px;
  }

  #cloud-3 {
    background-image: url("~@/assets/img/website/cloud-3.svg");
    animation-duration: 80s;
    animation-delay: -27s;
    top: 200px; 
    width: 150px;
    height: 150px;
  }

  #cloud-4 {
    background-image: url("~@/assets/img/website/cloud-2.svg");
    animation-duration: 105s;
    animation-direction: reverse;
    top: 220px; 
    width: 150px;
    height: 150px;
  }

  .clouds {
    position: absolute;
    z-index: 0;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: contain;
    overflow: hidden;
  }

  .left-right {
    animation-duration: 40s;
    animation-name: left-right;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-timing-function: linear;
  }

  @keyframes left-right {
    from {
      left: -300px;
    }

    to {
      left: 120vw;
    }
  }

  MailSignup {
    position: absolute;
    bottom: 0;
  }
</style>
