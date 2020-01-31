<template>
	<div :class="(picOnLeft? 'flex-row-reverse row': 'row') + ' pt-0 my-5 my-md-0'">
			<div class="col-md-6 my-auto">
					<div class="title text-left">{{title}}</div>
					<div class="desc">{{desc}}</div>
			</div>
			<img class="col-md-6 img-fluid p-4 my-3 my-md-0" :src="getImage(this.pic)">
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    title: String,
    desc: String,
    picOnLeft: Boolean,
    pic:String
  },
  methods:{
      getImage(loca:String){
          return require(`@/assets/img/website/${loca}`)
      }
  }
});
</script>

<style scoped>
	.title{
		color:white;
		font-size: 2em;
		font-weight: bold;
		line-height: 124%;
		margin-bottom: 3%;
	}

	.desc{
		color:white;
		font-size: 1.2em;
		line-height: 28px;
	}

	img{
		box-sizing: border-box;
	}
</style>
