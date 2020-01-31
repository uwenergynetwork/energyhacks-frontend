<template>
  <div>
    <div class="bg-blue">
      <div class="pt-2">
        <NavBar />
        <div class="col-12 row m-0">
          <Jumbotron class="offset-md-2 my-4 align-self-center" />
        </div>

        <div class="col-12 valley row m-0">
          <MailSignup class="my-md-auto pb-5 offset-md-2" />
        </div>
      </div>
    </div>

    <div class="bg-gradient pt-5">
      <Information class="mb-5" />
      <HowItWorks class="mt-5 pt-5" />
      <Slideshow class="mt-5 pt-5" />
      <Faq class="mt-5" />
    </div>

    <div class="bg-gradient-2 pt-5">
      <Sponsorship class="mb-5 pt-5" />
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
  min-height: 55vh;
}

MailSignup {
  position: absolute;
  bottom: 0;
}
</style>
