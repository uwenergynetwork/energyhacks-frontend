<template>
  <div>
    <NavBar/>
    <Jumbotron/>
    <MailSignup/>
    <Information/>
    <HowItWorks/>
    <Slideshow/>
    <Faq/>
    <Sponsorship/>
    <Footer/>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import NavBar from './NavBar.vue'
import Jumbotron from './Jumbotron.vue'
import MailSignup from './MailSignup.vue'
import Information from './Information.vue'
import HowItWorks from './HowItWorks.vue'
import Slideshow from './Slideshow.vue'
import Faq from './Faq.vue'
import Sponsorship from './Sponsorship.vue'
import Footer from './Footer.vue'

export default Vue.extend({
  name: 'main',
  components: {
    NavBar,
    Jumbotron,
    MailSignup,
    Information,
    Slideshow,
    Faq,
    Sponsorship,
    Footer
  }
});
</script>

<style>
</style>
