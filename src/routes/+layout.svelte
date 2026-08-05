<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Icon from "@iconify/svelte";
	import Lenis from "lenis";
	import { onMount } from "svelte";

	let { children } = $props();

	onMount(() => {
		const lenis = new Lenis({
			autoRaf: true,
		});
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-screen -z-50 fixed w-full bg-black"></div>
<header>
	<div class="flex justify-between px-24 py-6 items-center">
		<div>
			<p class="text-4xl text-fuchsia-500 font-extrabold">AuraSong</p>
		</div>

		<div>
			<a
				class="text-xl text-purple-300 hover:-translate-y-2 hover:underline transition-all duration-300"
				href="/">Listeen</a
			>
		</div>

		<div>
			<Icon
				icon="icon-park-outline:config"
				width="25px"
				class="text-purple-300"
			/>
		</div>
	</div>
</header>

{@render children()}
