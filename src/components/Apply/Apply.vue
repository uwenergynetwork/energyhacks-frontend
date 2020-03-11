<template>
  <div class="col-12 p-0 m-0 row">
    <SideBar :completed="[false, false, false, false]"/>
    <div class="d-flex col-6">Apply</div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import SideBar from "./SideBar.vue"

  export default Vue.extend({
    components: {
      SideBar
    }
  });
</script>

<style scoped>
</style>
