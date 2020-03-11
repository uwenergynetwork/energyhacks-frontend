<template>
  <div class="col-12">
    <div class="container col-lg-8 col-md-12 col-sm-12 mx-auto bk">
      <div class="row justify-content-center">
        <div class="col-12 mt-5 title">
          <h3>
            <b>How It Works</b>
          </h3>
        </div>
      </div>
      <div class="row col-12 mx-auto justify-content-center p-0">
        <how-it-works-step
          v-for="s in steps"
          :key="s[0]"
          :number="s[0]"
          :color="s[1]"
          :pic="s[2]"
          :text1="s[3]"
          :text2="s[4]"
        />
      </div>
      <div class="d-none d-sm-block" style="height: 120px"></div>
      <div style="height: 70px"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HowItWorksStep from './HowItWorksStep.vue';

export default Vue.extend({
  components: {
    HowItWorksStep,
  },
  data() {
    return {
      steps: [
        [
          '1',
          '#16353a',
          'apply-icon.svg',
          'When applications open, submit an application with your 4 person team or independently.',
          "Applications open on March 31 and close on April 19. Acceptances are sent out by April 29. If you get an acceptance email, just RSVP and then you're on your way to innovating at EnergyHacks!",
        ],
        [
          '2',
          '#547c83',
          'build-icon.svg',
          'For 24 hours, you can attend workshops, meet new people, and most importantly, get hacking!',
          '',
        ],
        [
          '3',
          '#88a550',
          'pitch-icon.svg',
          'Pitch your hack to the judges for a chance to win some great prizes.',
          '',
        ],
      ],
    };
  },
});
</script>

<style>
.bk {
  border-radius: 15px;
  background-color: #f4ffff;
  background-image: url('~@/assets/img/website/how-it-works-background.svg');
  background-size: contain;
  background-repeat: repeat-x;
  background-position: center bottom;
  min-height: 55vh;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.title {
  text-align: center;
}
</style>
