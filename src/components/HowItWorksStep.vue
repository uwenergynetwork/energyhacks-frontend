<template>
  <div class="row col-12 mt-5 mb-5" >
    <div class="col-md-1 col-sm-12 mt-1 mb-1 centre" ><span class="dot" :style="{'background-color': color, color:'white'}">{{number}}</span></div>
    <div class="col-md-2 col-sm-12 mt-1 mb-1 centre"><img :src="getImage(this.pic)"></div>
    <div class="col-md-9 col-sm-12 row mt-1 mb-1">
        <b class="col-12" :style="{'color': color}">{{text1}}</b>
        <span v-if="text2.length > 0" class="col-12" :style="{'color': color}"> {{text2}}</span>
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
  computed: {
      style () {
        return {'color:' : this.color,};
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

  .centre {
    text-align: center;
  }

</style>
