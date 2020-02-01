<template>
  <div class="navbar col-12 col-lg-10 mx-auto">
    <nav>
      <a href="#" id="logo">
        <div id="logo-nav"></div>
      </a>
      <div class="right-side d-sm-flex d-none d-sm-block">
        <ScrollLink href="#about">About</ScrollLink>
        <ScrollLink href="#how-it-works">How it works</ScrollLink>
        <ScrollLink href="#slideshow">2019</ScrollLink>
        <ScrollLink href="#faq">FAQ</ScrollLink>
        <ScrollLink href="#sponsor">Sponsors</ScrollLink>
        <div class="w-25 d-flex justify-content-around">
          <a href="https://www.facebook.com/UWaterlooEnergyNetwork/" target="_blank">
            <div class="svg-scale2525" id="fbicon-nav"></div>
          </a>
          <a href="https://www.instagram.com/uwenergynetwork/" target="_blank">
            <div class="svg-scale2525" id="instaicon-nav"></div>
          </a>
          <a href="mailto:energyhacks@uwen.ca" target="_blank">
            <div class="svg-scale2525" id="mailicon-nav"></div>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ScrollLink from "./ScrollLink.vue"

export default Vue.extend({
  components:{
    ScrollLink
  }
});
</script>

<style scoped>
  #logo-nav{
    background-image: url("~@/assets/img/website/logo.svg");
    height:51px;
    width:51px;
  }
  .navbar {
    z-index: 1;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
    justify-content: center;
  }
  .right-side {
    margin-left: auto;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 70%;
  }

  a {
    color: black;
    font-weight: bold;
    font-size: 0.9em;
  }

  a:hover {
    color: black;
    opacity: 80%;
    text-decoration: none;
  }
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
  }

  .svg-scale2525 {
    height: 25px;
    width: 25px;
  }

  #fbicon-nav{
    background-image: url("~@/assets/img/website/facebook.svg");
  }
  
  #instaicon-nav{
    background-image: url("~@/assets/img/website/insta.svg");
  }

  #mailicon-nav{
    background-image: url("~@/assets/img/website/mail.svg");
  }
</style>
