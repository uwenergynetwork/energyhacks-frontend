<template>
  <div class="col-12 row">
    <transition name="fade">
      <div v-if="show" class="col-md-6 col-sm-12 align-self-center">
          <h1><b>EnergyHacks</b></h1>
          <h3 class="pb-1"><b>University of Waterloo · May 23-24, 2020</b></h3>
          <h5>Sustainability problems.</h5>
          <h5>Forwarding thinking.</h5>
          <h5 class="pb-2">Powerful solutions.</h5>
          <h5><b>Applications open early April</b></h5>
      </div>
    </transition>

    <transition name="slide-down">
      <div v-if="show" id="island" class="d-none d-md-block">
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.show = true;
  }
});
</script>

<style scoped>
  h {
    color: #16353A
  }
  #island {
    position: absolute;
    top: 0px; left: 33vw;
    z-index: 1;
    width: 600px;
    height: 600px;
    background-image: url("~@/assets/img/website/island.svg");
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: contain;
    overflow: hidden;
    animation-duration: 2s;
    animation-name:  up-down;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  .slide-down-enter-active {
    transition: all 1s ease;
  }

  .slide-down-enter {
    transform: translateY(-20px);
    opacity: 0;
  }

  @keyframes up-down {
    from {
      top: 1vh;
    }

    to {
      top: -1vh;
    }
  }

</style>
