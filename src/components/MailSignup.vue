<template>
  <transition name="fade">
    <div v-if="show" class="col-md-4 col-sm-12 white mt-">
      <div class="col-md-8 col-sm-12 mb-3">
        <div>
          <b>Subscribe to our mailing list to receive important announcements!</b>
        </div>
      </div>
      <div class="col-12 row pb-md-5 mx-0">
        <input
          type="email"
          v-model="email"
          class="col-md-8 col-sm-12 round white-border mr-md-3 white"
          placeholder="Enter your email address"
        />
        <button
          type="button"
          v-on:click="subscribeEmail"
          class="col-md-3 col-sm-12 button round white-border mt-md-0 mt-2"
        >
          <span class="white">
            <b>Subscribe</b>
          </span>
        </button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  data() {
    return {
      email: "",
      show: false
    };
  },
  mounted() {
    this.show = true;
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

<style scoped>
.round {
  border-radius: 100px;
}

.white-border {
  border: 1px solid #ffffff;
  background: transparent;
}
</style>
