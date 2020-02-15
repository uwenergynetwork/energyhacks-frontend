<template>
  <div class="row col-12 m-1 my-md-3 mx-auto p-0" >
    <div class="col-md-1 col-sm-12 mt-1 mb-1 text-center" ><span class="dot" :style="{'background-color': color, color:'white'}">{{number}}</span></div>
    <div class="col-md-2 col-sm-12 mt-1 mb-1 pb-2 text-center"><img :src="getImage(this.pic)"></div>
    <div class="col-md-9 col-sm-12 mt-1 mb-1">
        <div class="row">
          <b class="col-12" :style="{'color': color}">{{text1}}</b>
          <span v-if="text2.length > 0" class="col-12" :style="{'color': color}"> {{text2}}</span>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    number: String,
    color: String,
    pic: String,
    text1: String,
    text2: String
  },
  methods:{
      getImage(loca:String){
          return require(`@/assets/img/website/${loca}`)
      }
  }
});
</script>

<style scoped>
  .dot {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
  }

</style>
