<template>
  <div class="col-12 row">
    <div class="col-md-6 col-sm-12 align-self-center">
      <h1><b>EnergyHacks</b></h1>
      <h3 class="pb-1"><b>University of Waterloo · May 23-24, 2020</b></h3>
      <h5>Sustainability problems.</h5>
      <h5>Forwarding thinking.</h5>
      <h5 class="pb-2">Powerful solutions.</h5>
      <h5><b>Applications open early May</b></h5>
    </div>
    <div id="island" class="d-none d-md-block">
    </div>
    <div id="island-sm" class="d-md-none">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
});
</script>

<style scoped>
  h {
    color: #16353A
  }
  #island {
    position: absolute;
    top: 0px; right: 27.5vw;
    z-index: 1;
    width: 40vw;
    height: 40vw;
    background-image: url("~@/assets/img/website/island.svg");
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: contain;
    overflow: hidden;
  }

  #island-sm {
    position: absolute;
    top: 60vh; right: -10vw;
    z-index: 1;
    width: 60vw;
    height: 60vw;
    background-image: url("~@/assets/img/website/island.svg");
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: contain;
    overflow: hidden;
  }
</style>
