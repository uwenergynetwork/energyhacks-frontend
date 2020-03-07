<template>
  <div class="d-flex col-12 col-lg-3 col-xl-2 p-0">
    <div id="sidebar-big" class="d-none d-lg-block col-12 text-center">
      <img id="logo" src="@/assets/img/application/logo.svg" class="mt-5"/>
    </div>
    <div class="d-lg-none col-12">
      SideBar Small
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    completed: Array
  }
});
</script>

<style scoped>
#sidebar-big {
  height: 100vh;
  background-color: #16353A;
}
#logo {
  height: 50px;
  width: 50px;
}
</style>
