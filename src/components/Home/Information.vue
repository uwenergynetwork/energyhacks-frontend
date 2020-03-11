<template>
  <div class="container mx-auto col-11 col-md-11 col-lg-8">
    <div id="infoSection">
      <info-section
        v-for="(content, index) in contents"
        :key="content[0]"
        :title="content.title"
        :desc="content.desc"
        :picOnLeft="index % 2 !== 0"
        :pic="content.pic"
      />
      <div class="trees tree-1 d-none d-md-block"></div>
      <div class="trees tree-2 d-none d-md-block"></div>
      <div class="trees tree-3 d-none d-md-block"></div>
      <div class="trees tree-4 d-none d-md-block"></div>
      <div class="trees tree-5 d-none d-md-block"></div>
      <div class="trees tree-6 d-none d-md-block"></div>
      <div class="trees tree-7 d-none d-md-block"></div>
      <div class="trees tree-8 d-none d-md-block"></div>
      <div class="trees tree-9 d-none d-md-block"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import InfoSection from './InfoSection.vue';

export default Vue.extend({
  components: {
    InfoSection,
  },
  data() {
    return {
      contents: [
        {
          title: 'An Energy First Hackathon',
          desc:
            'Being the only energy focused hackathon in Canada, EnergyHacks offers a unique experience by encouraging participants to come up with solutions for one of the most pressing issues to date.',
          pic: 'infoSect1.svg',
        },
        {
          title: 'Uniting students across all faculties',
          desc:
            'Your solution can be technical or non-technical, which includes apps, proposals for law changes, and more! Get ready for your team to tackle challenges with technical, social, economic, and environmental aspects. We are uniting students to create solutions for a better world!',
          pic: 'infoSect2.png',
        },
        {
          title: 'We’re sustainable!',
          desc:
            'We strongly encourage the use of reusable water bottles and will provide compostable food containers and cutlery. Low emissions and low waste!',
          pic: 'infoSect3.svg',
        },
      ],
    };
  },
});
</script>

<style scoped>
section {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding-top: 10%;
}

#infoSection {
  position: relative;
}

.trees {
  position: absolute;
  z-index: 0;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
}

.tree-1 {
  background-image: url('~@/assets/img/website/tree-1.svg');
  position: absolute;
  top: 102%;
  right: 103%;
  width: 40px;
  height: 40px;
}

.tree-2 {
  background-image: url('~@/assets/img/website/tree-2.svg');
  position: absolute;
  top: 105%;
  right: 118%;
  width: 50px;
  height: 50px;
}

.tree-3 {
  background-image: url('~@/assets/img/website/tree-1.svg');
  position: absolute;
  top: 93%;
  right: 114%;
  width: 40px;
  height: 40px;
}

.tree-4 {
  background-image: url('~@/assets/img/website/tree-1.svg');
  position: absolute;
  top: 107%;
  right: -22%;
  width: 70px;
  height: 70px;
}

.tree-5 {
  background-image: url('~@/assets/img/website/tree-1.svg');
  position: absolute;
  right: -9%;
  top: 101%;
  width: 40px;
  height: 40px;
}

.tree-6 {
  background-image: url('~@/assets/img/website/tree-2.svg');
  position: absolute;
  top: 92%;
  right: -19%;
  width: 50px;
  height: 50px;
}

.tree-7 {
  background-image: url('~@/assets/img/website/tree-3.svg');
  position: absolute;
  top: -1%;
  right: -12%;
  width: 50px;
  height: 50px;
}

.tree-8 {
  background-image: url('~@/assets/img/website/tree-3.svg');
  position: absolute;
  top: -4%;
  right: 115%;
  width: 70px;
  height: 70px;
}

.tree-9 {
  background-image: url('~@/assets/img/website/tree-4.svg');
  position: absolute;
  top: -8%;
  right: 100%;
  width: 50px;
  height: 50px;
}
</style>
