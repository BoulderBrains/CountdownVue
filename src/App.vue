<template>
  <div id="app">
	<button type="button" class="" @dblclick="start" @click="pause">
		<countdown :auto-start="false" ref="countdown" :time="70 * 1000" @end="pause" v-slot="{ minutes, seconds }" :key="componentKey">{{minutes}}m {{seconds}}s</countdown>
	</button>
	
	<button class="bg-red-50" @click="reset">Reset</button>
  </div>
</template>

<script>


export default {
	name: 'App',
	data() {
		return {
			componentKey: 0,
		};
	},
	methods: {
		start() {
			this.$refs.countdown.start();
		},
		pause() {
			this.$refs.countdown.abort();
		},
		reset() {
			// update the component key, which resets the component
			this.componentKey += 1;
		}
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.resetButton {
	display: block;
	background-color: blue;
	height: 40px;
	width: 200px;
}
</style>
