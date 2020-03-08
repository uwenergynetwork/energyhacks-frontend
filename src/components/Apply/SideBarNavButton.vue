<template>
  <a class="row p-2">
    <b class="col-2">{{name}}</b> 
    <div class="col-10 status">{{completed? "Completed" : "Not Completed"}}</div>
  </a>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    name: String,
    completed: Boolean
  }
});
</script>

<style scoped>

a > *{
  color:white;
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

/* .example-content-secondary {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(4);
  }
} */

</style>
