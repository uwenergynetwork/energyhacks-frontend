<template>
  <transition name="fade">
    <div v-if="show" class="col-md-5 col-sm-12 white text-md-left text-center mt-5">
      <div class="col-md-8 col-sm-12 mb-3">
        <div>
          <b :class="is_mobile ? 'blue' : ''">Subscribe to our mailing list to receive important announcements!</b>
        </div>
      </div>
      <div class="col-12 row pb-md-5 mx-0">
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
  computed: {
    is_mobile() {
      const isMobile = window.matchMedia("only screen and (max-width: 760px)")
      return isMobile.matches ? true : false
    }
  },
  mounted() {
    this.show = true;
  },
  methods: {
    subscribeEmail: function() {
      axios
        .post("https://us-central1-uwenca.cloudfunctions.net/earlyEmailSignup", {
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
  .blue {
    color: #16353A
  }

  @media (min-width: 576px) { 
    .dark-on-mobile {
      color: #16353A;
    }
  }
</style>
