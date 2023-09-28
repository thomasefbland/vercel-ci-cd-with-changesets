<script lang="ts">
	import { sum, difference } from "$lib/utils/math";

	export let initialCount = 0;
	let count = initialCount;

	function decrement() {
		count = difference(count, 1);
	}

	function increment() {
		count = sum(count, 1);
	}

	function reset() {
		count = initialCount;
	}
</script>

<div class="text-center">
	<div class="counter">
		<button on:click={decrement} class="decrement">-</button>
		<input type="number" bind:value={count} />
		<button on:click={increment} class="increment">+</button>
	</div>
	<button on:click={reset} class="reset">Reset</button>
</div>

<style lang="postcss">
	.counter {
		@apply flex h-[120px] items-center justify-center gap-x-2;

		& input[type="number"] {
			@apply h-[110px] w-[105px] rounded-2xl border text-center text-[58px];

			&::-webkit-outer-spin-button,
			&::-webkit-inner-spin-button {
				-webkit-appearance: none;
				margin: 0;
			}
		}

		& button {
			@apply flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-2xl text-[32px] font-semibold;

			&.decrement {
				background-color: rgba(255, 35, 35, 0.7);
			}
			&.increment {
				background-color: rgba(84, 84, 255, 0.5);
			}
		}
	}

	.reset {
		@apply mt-2 rounded-md bg-green-400 px-6 py-3 text-lg;
	}
</style>
