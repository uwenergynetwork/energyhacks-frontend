<template>
  <div class="col-md-6 col-sm-12">
    <div
      class="clickable faq-box py-2 px-3 my-2 mx-auto"
      v-b-toggle="id"
      @click="visible = !visible"
    >
      <div class="col-12 btn d-flex justify-content-between p-0">
        <div>
          <h5 class="text-left">{{ question }}</h5>
        </div>
        <div>
          <h5>{{ visible ? '—' : '＋' }}</h5>
        </div>
      </div>
      <b-collapse :id="id">
        <p class="my-1" v-html="answer"></p>
      </b-collapse>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    question: String,
    answer: String,
  },
  data() {
    return {
      id: '',
      visible: false,
    };
  },
  mounted() {
    this.id = Math.round(Math.random() * 1000000).toString();
  },
});
</script>

<style scoped>
h5 {
  margin-bottom: 0px;
}

.faq-box {
  background: none;
  border: 2px solid black;
  border-radius: 10px;
}

button {
  box-shadow: none;
}

.clickable {
  cursor: pointer;
}
</style>
