<script lang="ts">
	import Counter from "$lib/components/Counter.svelte";
</script>

<h1 class="mb-16 mt-4 text-center text-4xl font-bold">This is a demo site to showcase a CI/CI pipeline with Vercel and Changesets</h1>

<div class="flex flex-col gap-y-12">
	<div id="counter-1">
		<h2 class="mb-4 text-center text-4xl font-semibold">Counter #1</h2>
		<Counter />
	</div>

	<div id="counter-2">
		<h2 class="mb-4 text-center text-4xl font-semibold">Counter #2</h2>
		<Counter initialCount={5} />
	</div>
</div>
