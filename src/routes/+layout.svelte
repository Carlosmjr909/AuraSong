<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Icon from "@iconify/svelte";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon}
/></svelte:head>

<div class="min-h-screen -z-50 fixed w-full bg-linear-to-br from-violet-100 to-sky-100"></div>
<header>
	<div class="flex justify-between px-24 py-6 items-center">
	<div>
		<p class="text-4xl text-purple-900 font-extrabold">AuraSong</p>
	</div>
		
	<div>
<a class="text-xl text-purple-950 hover:underline hover:-translate-y-2 transition-all duration-300" href="/">Home</a>
	</div>
		
	<div>
<Icon icon="icon-park-outline:config" width="25px" class="text-purple-950" />
	</div>
	</div>
</header>

{@render children()}
