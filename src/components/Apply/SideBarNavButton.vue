<template>
  <a class="row align-items-center py-2 flex-nowrap justify-content-between" :class="active?'active' : ''">
    <b class="col-4">{{name}}</b> 
    <div class="col-8 ml-auto status">
      <div class="d-flex flex-wrap justify-content-end ml-2 maxw-200">
        <div class="mr-1" :v-if="!completed">Not</div>
        <div>Completed</div>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    name: String,
    completed: Boolean,
    active: Boolean
  }
});
</script>

<style scoped>
  a{
    cursor:pointer;
    margin:0px;
  }
  a > *{
    color:white;
  }
    .active{
      background-color: #88A550;
    }

  b{
    font-size:0.9em;
  }

  .status{
    text-align:right;
    font-style:italic;
    font-weight:normal;
    font-size:0.75em;
    }

  .maxw-200{
    max-width:200px;
  }
</style>
