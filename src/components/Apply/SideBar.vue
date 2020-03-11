<template>
  <div class="d-flex col-12 col-lg-3 col-xl-2 p-0">
    <div id="sidebar-big" class="d-none d-lg-block col-12 text-center">
      <img id="logo" src="@/assets/img/application/logo.svg" class="my-5"/>
      <div>
        <side-bar-nav-button  
          v-for="(step, index) in steps"
          :key="step[0]"
          :name="step.name"
          :active="step.active"
          :completed="completed[index]"
          ></side-bar-nav-button>
      </div>
    </div>
    <div id="sidebar-small" class="d-lg-none col-12">
      <div id="header" class="row justify-content-center">
        <div class="logo-mobile col-1 m-2"></div>
        <div class="text-center mt-2 text-white">EnergyHacks</div> 
      </div>
      <progress-bar :steps='steps'></progress-bar>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SideBarNavButton from "./SideBarNavButton.vue";
import ProgressBar from "./ProgressBar.vue";

export default Vue.extend({
  props: {
    completed: Array
  },
  components:{
    SideBarNavButton,
    ProgressBar
  },
  data(){
    return {
      steps:[
        {name:"Personal", active:true},
        {name:"Hackathon", active:false},
        {name:"Questions", active:false},
        {name:"Logistics", active:false}
      ]}
  }
});
</script>

<style scoped>

  #sidebar-big {
    height: 100vh;
    background-color: #16353A;
  }

  #sidebar-small{
    background-color: #16353A;
    z-index: -5;
    width:100%;
  }
  #logo {
    height: 50px;
    width: 50px;
  }

  .logo-mobile {
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: contain;
    overflow: hidden;
    background-image: url("~@/assets/img/application/mobileApplyLogo.svg");
  }

  #header{
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
  
</style>
