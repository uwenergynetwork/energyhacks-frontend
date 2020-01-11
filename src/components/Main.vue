<template>
  <div>
    <NavBar />
    <div class="bg-blue">
      <div class="col-12 row m-0">
        <Jumbotron class="offset-md-2 my-4 align-self-center"/>
      </div>

      <div class="col-12 valley row m-0">
        <MailSignup class="my-auto pb-5 align-self-center offset-md-2"/>
      </div>
    </div>

    <Information />
    <HowItWorks />
    <Slideshow />
    <Faq />
    <Sponsorship />
    <Footer />
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
  background-color: #C4DCDC
}

.valley {
  background-image: url("~@/assets/img/website/background.svg");
  background-size: contain;
  background-repeat: repeat-x;
  background-position: center bottom;
  overflow: hidden;
  height: 55vh;
}

MailSignup {
  position: absolute;
  bottom: 0;
}
</style>
