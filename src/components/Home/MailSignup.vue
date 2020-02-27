<template>
  <transition name="fade">
    <div v-if="show" class="col-lg-5 col-md-7 col-sm-12 white text-md-left text-center">
      <div class="col-lg-8 col-md-10 col-sm-12 mb-3">
        <div>
          <b :class="is_mobile ? 'blue' : ''">Subscribe to our mailing list to receive important announcements!</b>
        </div>
      </div>
      <div v-if="!subbed && !loading" class="col-12 row pb-md-5 mx-0">
        <input
          type="email"
          v-model="email"
          :class="'col-md-7 col-sm-12 round mr-md-3 ' + (is_mobile ? 'blue blue-border' : 'white white-border')"
          placeholder="Enter your email address"
        />
        <button
          type="button"
          v-on:click="subscribeEmail"
          :class="'col-md-4 col-sm-12 button round blue bg-light mt-md-0 mt-2 p-1 ' + (is_mobile ? 'blue-border' : 'white-border')"
        >
          <b>Subscribe</b>
        </button>
        <p v-if="error" class="text-danger mt-2 text-center col-12">{{error}}</p>
      </div>
      <div v-if="subbed && !loading" class="col-12 row pb-md-5 mx-0">
        <p class="text-success mt-2 col-12">Thanks for joining our mailing list!</p>
      </div>
      <div v-if="loading" class="mx-auto col-12 text-center">
        <div class="spinner-border text-secondary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
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
      show: false,
      error: null,
      loading: false,
      subbed: false
    };
  },
  computed: {
    is_mobile() {
      const isMobile = window.matchMedia("only screen and (max-width: 992px)")
      return isMobile.matches ? true : false
    }
  },
  mounted() {
    this.show = true;
  },
  methods: {
    subscribeEmail: function() {
      var self = this;
      self.error = null
      self.loading = true;
      axios.post("https://us-central1-uwenca.cloudfunctions.net/earlyEmailSignup", {
          email: this.email
        })
        .then(function(response) {
          self.loading = false;
          self.subbed = true;
        })
        .catch(function(error) {
          self.loading = false;
          self.error = error.response.data;
        });
    }
  }
});
</script>

<style scoped>
  .blue {
    color: #16353A
  }

  @media (min-width: 576px) { 
    .dark-on-mobile {
      color: #16353A;
    }
  }
</style>
