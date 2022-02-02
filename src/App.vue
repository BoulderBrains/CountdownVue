<template>
	<div id="app">
		<div class="flex-box-centered heading">
			<h1>Countdown Timer</h1>
		</div>
		<div class="flex-box-centered">
			<button
				type="button"
				aria-label="start-pause-button"
				class="countdown-wrapper"
				@dblclick="start"
				@click="pause"
			>
				<countdown
					:auto-start="false"
					ref="countdown"
					:time="70 * 1000"
					@end="pause"
					v-slot="{ minutes, seconds }"
					:key="componentKey"
				>
					{{minutes}}m {{seconds}}s
				</countdown>
			</button>
		</div>
		<div class="flex-box-centered">
			<button
				type="button"
				aria-label="reset-button"
				class="reset-button"
				@click="reset"
			>
				Reset
			</button>
		</div>
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
			// reach out to the countdown component
			// through it's ref trigger it to start
			this.$refs.countdown.start();
		},
		pause() {
			// reach out to the countdown component
			// through it's ref trigger it to pause
			this.$refs.countdown.abort();
		},
		reset() {
			// update the component key,
			//which resets the component
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
	color: #2c3e50;
	margin-top: 3.75rem;
}

.flex-box-centered {
	display: flex;
	justify-content: center;;
}

.heading {
	margin-bottom: 2.25rem;
}

h1 { 
	color: #5E5E5E;
}

.countdown-wrapper {
	border-radius: 50%;
    height: 18.75rem;
	width: 18.75rem;
    background-color: black;
    color: white;
    font-size: 4.375rem;
    font-weight: bold;
	cursor: pointer;
	margin-bottom: 2.25rem;
}

.reset-button {
	background-color: #42A1F8;
	border: none;
	width: 12.5rem;
	height: 5rem;
	font-size: 1.75rem;
	font-weight: bold;
}
</style>
