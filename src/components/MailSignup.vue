<template>
  <div style="background-color: black" class="col-md-4 col-sm-12 white">
    <div class="col-md-8 col-sm-12 mb-3">
      <div>
        <b>Subscribe to our mailing list to receive important announcements!</b>
      </div>
    </div>
    <div class="col-12 row pb-5 mx-0">
      <input
        type="email"
        v-model="email"
        class="col-md-8 col-sm-12 round white-border py-1 mr-3 white"
        placeholder="Enter your email address"
      />
      <button
        type="button"
        v-on:click="subscribeEmail"
        class="col-md-3 col-sm-12 button round white-border"
      >
        <span style="color: white">
          <b>Subscribe</b>
        </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  data() {
    return {
      email: ""
    };
  },
  methods: {
    subscribeEmail: function() {
      axios
        .post("https://us-central1-uwenca.cloudfunctions.net/earlySignup", {
          email: this.email
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
});
</script>

<style>
.round {
  border-radius: 100px;
}

.white-border {
  border: 1px solid #ffffff;
  background: transparent;
}
</style>
