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

      <div id="island" class="d-none d-md-block hide-yellow"></div>
      <div class="pulse">
        <div id="island" class="d-none d-md-block show-yellow"></div>
      </div>
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
    pointer-events: none;
    position: absolute;
    top: -3vh; left: 33vw;
    width: 600px;
    height: 600px;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: contain;
    overflow: hidden;
  }

  .hide-yellow {
    z-index: 2;
    animation-delay: 1s;
    animation-duration: 10s;
    animation-name: up-down;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    background-image: url("~@/assets/img/website/island-without-yellow.svg");
  }

  .show-yellow {
    z-index: 2;
    animation-delay: 1s;
    animation-duration: 10s;
    animation-name: up-down;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    background-image: url("~@/assets/img/website/island-yellow.svg");
    filter: drop-shadow(0 0 30px yellow);
  }

  .pulse {
    animation-delay: 1s;
    animation-duration: 2s;
    animation-name: pulse;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: linear;
  }

  @keyframes up-down {
    from {
      top: -40px;
    }

    to {
      top: -10px;
    }
  }

  @keyframes pulse {
    from {
      opacity: 1;
      
    }

    to {
      opacity: 0.2;
    }
  }

</style>
