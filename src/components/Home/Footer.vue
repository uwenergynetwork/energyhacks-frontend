<template>
  <div>
    <div class="col-12 text-center d-flex justify-content-around pt-5">
      <b-col>
        <div class="text-center">
          <h4>CONTACT</h4>
        </div>
        <div class="text-center d-flex justify-content-center">
          <a
            href="https://www.facebook.com/UWenergyhacks"
            target="_blank"  
          >
            <div class="svg-scale5050 mx-2 mb-5" id="fbicon-footer"></div>
          </a>
          <a href="https://www.instagram.com/energy_hacks/" target="_blank">
            <div class="svg-scale5050 mx-2" id="instaicon-footer"></div>
          </a>
          <a href="mailto:energyhacks@uwen.ca" target="_blank">
            <div class="svg-scale5050 mx-2" id="mailicon-footer"></div>
          </a>
          <a href="https://twitter.com/energy_hacks" target="_blank">
            <div class="svg-scale5050 mx-2" id="twittericon-footer"></div>
          </a>
        </div>
        <div class="text-center d-flex justify-content-center text-white">
          <div fluid flex-wrap class="mx-2 px-2" v-bind:class="{ nowrap: window.width > 450 }">
            <a target="_blank" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
              <u>Code of Conduct</u>
            </a>
          </div>
          <div
            fluid
            flex-wrap
            class="mx-2 px-2 center"
            v-bind:class="{ nowrap: window.width > 500 }"
          >
            <div>
              <a target="_blank" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">
                <u>Privacy Policy</u>
              </a>
            </div>
            <div class="mt-4 mb-5 nowrap">
              <a href="https://uwen.ca" target="_blank">© UWEN</a>
            </div>
          </div>
          <div fluid flex-wrap class="mx-2 px-2" v-bind:class="{ nowrap: window.width > 450 }">
            <a target="_blank" href="mailto:energyhacks@uwen.ca">
              <u>Become a Sponsor</u>
            </a>
          </div>
        </div>
      </b-col>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      window: {
        width: 0,
        height: 0
      }
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  }
});
</script>

<style scoped>
.svg-scale5050 {
  height: 50px;
  width: 50px;
}

#fbicon-footer {
  background-image: url("~@/assets/img/website/facebookWhite.svg");
  background-repeat: no-repeat;
  background-size: contain;
}

#instaicon-footer {
  background-image: url("~@/assets/img/website/instaWhite.svg");
  background-repeat: no-repeat;
  background-size: contain;
  fill: white;
}

#mailicon-footer {
  background-image: url("~@/assets/img/website/mailWhite.svg");
  background-repeat: no-repeat;
  background-size: contain;
}

#twittericon-footer {
  background-image: url("~@/assets/img/website/twitterWhite.svg");
  background-repeat: no-repeat;
  background-size: contain;
}

h4 {
  color: white;
}

.nowrap {
  white-space: nowrap;
}

.center {
  display: flex;
  flex-direction: column;
}

a:hover {
  opacity: 0.5;
  text-decoration: none;
  display: block;
  color:inherit;
}

a{
  color: inherit;
}

</style>
