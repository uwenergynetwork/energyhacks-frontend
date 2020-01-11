<template>
  <div class="col-12 row">
    <div class="col-md-6 col-sm-12">
      <h1><b>EnergyHacks</b></h1>
      <h2 class="pb-1"><b>University of Waterloo · May 23-24, 2020</b></h2>
      <h5>Sustainability problems.</h5>
      <h5>Forwarding thinking.</h5>
      <h5 class="pb-2">Powerful solutions.</h5>
      <h5><b>Applications open early May</b></h5>
    </div>
    <div id="island" class="d-sm-none d-md-block">
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
</style>
