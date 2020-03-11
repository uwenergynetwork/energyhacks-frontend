<template>
  <div class="col-12">
    <div class="container col-lg-8 col-md-11 col-sm-12 mx-auto pt-5">
      <h3><b>FAQ</b></h3>
      <div class="row">
        <faq-question
          v-for="question in questions"
          :key="question[0]"
          :question="question[0]"
          :answer="question[1]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FaqQuestion from './FaqQuestion.vue';

export default Vue.extend({
  components: {
    FaqQuestion,
  },
  data() {
    return {
      questions: [
        [
          'Who can apply?',
          'This event is open to college/university students and recent graduates. You do not need to have prior technical knowledge for this event!',
        ],
        [
          'What if I don’t have a team?',
          "Don't worry! You will have the opportunity to team up with others before the event in one of our dedicated Slack channels, and at the beginning of the event.",
        ],
        [
          'Is there any cost to participate?',
          "None! This event is completely free! Just ensure that you have received an acceptance email and RSVP'd. ",
        ],
        [
          'Will there be food?',
          'Yes! There will be lunch, dinner, snacks, coffee and more, so bring your appetite!',
        ],
        [
          'Do I need to code something to win?',
          'Nope! This hackathon encourages all types of solutions, including mockups, videos, and proposals for policy changes, in addition to technical solutions.',
        ],
        [
          'Do we follow a Code of Conduct?',
          "Yes, EnergyHacks follows the <a href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf' target='_blank'>MLH Code of Conduct</a>.",
        ],
      ],
    };
  },
});
</script>

<style scoped>
h2 {
  color: #16353a;
}
</style>
