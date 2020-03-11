<template>
<div class="container">
  <ul class="progressbar row">
    <li v-for="step in steps" 
    :key="step[0]"
    class="col-3 d-flex flex-column">
      <div>{{step.name}}</div>
      <div id="status">
        {{step.completed? "Completed" : "Not Completed"}}
      </div>
    </li>
  </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props:{
    steps:Array
  }
});
</script>

<style scoped>
  *{
    box-sizing: border-box;
  }
  .progressbar{
    list-style-type:none;
    padding:0;
    color:#88A550;
    overflow:hidden;
  }

  li{
    text-align:center;  
    font-size:0.7rem;  
    padding:0;
  }

  .progressbar li:before{
    content: " ";
    min-width: 20px;
    min-height:20px;
    width: 2vw;
    height: 2vw;
    display: block;
    margin: 5px auto 0.50rem auto;
    border-radius: 50%;
    background:#88A550;
    text-align: center;
    font-weight: bold;
  }

  .progressbar li:after{
    content: '';
    position: absolute;
    width:100%;
    height: 3px;
    background:#88A550;
    top: 15px;
    left:-50%;
    z-index: -1;
  }

  .progressbar li:first-child:after{
    content: none;
  }

  .progressbar li:first-child:before{
    background: white;
    border: 3px solid #88A550;
  }

  .progressbar li.active + li:after{
    background:white;
  }
  .progressbar li.active + li:before{
    background: white;
    border: 3px solid #88A550;
  }

  #status{
    font-style:italic;
    font-weight:normal;
    font-size:0.75em;
    text-align:center;
    padding: 0px 10px 0px 10px;
  }

</style>
