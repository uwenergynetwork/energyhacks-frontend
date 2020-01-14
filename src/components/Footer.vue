<template>
  <div
    class="footer-copyright text-center py-3 d-flex justify-content-between align-items-center"
  >
    <div fluid class="px-4">
      <a href>
        <b>Contact Us</b>
      </a>
    </div>
    <div fluid>
      <b-button squared variant="outline-secondary" class="mx-1">
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </b-button>
      <b-button squared variant="outline-secondary" class="mx-1">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </b-button>
      <b-button squared variant="outline-secondary" class="mx-1">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </b-button>
    </div>
    <div fluid class="px-4">
      <a href>
        <b>Privacy Policy</b>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped>
.footer-copyright {
  background-color: #16353a;
  opacity: 0.5;
}

a {
  color: white;
}
</style>
