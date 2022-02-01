<template>
  <div id="app">
	<div>
		<h1>Countdown Timer</h1>
	</div>
	<div class="container">
		<div class="countdown-wrapper" @dblclick="start" @click="pause">
			<countdown :auto-start="false" ref="countdown" :time="70 * 1000" @end="pause" v-slot="{ minutes, seconds }" :key="componentKey">{{minutes}}m {{seconds}}s</countdown>
		</div>
	</div>
	<button class="reset-button" @click="reset">Reset</button>
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
	margin-top: 3.75rem;
}

h1 { 
	color: #5E5E5E;
	margin-bottom: 2.25rem;
}

.container {
	display: flex;
	justify-content: center;;
}

.countdown-wrapper {
	border-radius: 50%;
    height: 18.75rem;
	width: 18.75rem;
    background-color: black;
	display: flex;
    justify-content: center;
    color: white;
    font-size: 4.375rem;
    font-weight: bold;
	align-items: center;
	cursor: pointer;
	margin-bottom: 2.25rem;
}

.reset-button {
	justify-content: center;
	background-color: #42A1F8;
	border: none;
	width: 12.5rem;
	height: 5rem;
	font-size: 1.75rem;
	font-weight: bold;
}
</style>
