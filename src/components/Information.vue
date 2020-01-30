<template>
	<div class="container mx-auto col-11 col-md-11 col-lg-8">
	<info-section v-for="(content, index) in contents" 
	:key=content[0] 
	:title="content.title" 
	:desc="content.desc" 
	:picOnLeft="index%2 !== 0"
	:pic="content.pic" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import InfoSection from "./InfoSection.vue";

export default Vue.extend({
  components: {
    InfoSection
  },
  data(){
    return{
      contents:[
        { 
          title: "An Energy First Hackathon", 
          desc:"Being the only energy focused hackathon in Canada, EnergyHacks offers a unique experience by encouraging participants to come up with solutions for one of the most pressing issues to date.",
          pic: "infoSect1.svg"
        },
        { 
          title: "Uniting students across all faculties", 
          desc:"Your solution can be technical or non-technical, which includes apps, proposals for law changes, and more! Get ready for your team to tackle challenges with technical, social, economic, and environmental aspects. We are uniting students to create solutions for a better world!",
          pic: "infoSect2.svg"
        },
        { 
          title: "We’re sustainable!", 
          desc:"Being the only energy focused hackathon in Canada, EnergyHacks offers a unique experience by encouraging participants to come up with solutions for one of the most pressing issues to date.",
          pic: "infoSect3.svg"
        },
      ]
    }
  }
});
</script>

<style scoped>
  section{
    display:flex;
    height:100%;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    padding-top:10%;
  }
</style>
