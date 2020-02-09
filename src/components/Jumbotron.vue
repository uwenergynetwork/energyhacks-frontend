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
      <div v-if="show" id="island" class="d-none d-md-block hide-yellow"></div>
    </transition>
    <transition name="slide-down">
      <div class="pulse">
        <div v-if="show" id="island" class="d-none d-md-block show-yellow"></div>
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
    width: 600px;
    height: 600px;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: contain;
    overflow: hidden;
  }

  .hide-yellow {
    z-index: 2;
    animation-duration: 2s;
    animation-name: up-down;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    background-image: url("~@/assets/img/website/island-without-yellow.svg");
  }

  .show-yellow {
    z-index: 1;
    animation-duration: 2s;
    animation-name: up-down;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    background-image: url("~@/assets/img/website/island-yellow.svg");
  }

  .pulse {
    animation-duration: 1s;
    animation-name: pulse;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: linear;
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
      top: -5vh;
    }

    to {
      top: -6vh;
    }
  }

  @keyframes pulse {
    from {
      opacity: 0.7;
    }

    to {
      opacity: 1;
    }
  }

</style>
