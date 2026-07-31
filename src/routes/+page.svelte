<script>
    import BarradeMusica from '$lib/components/BarradeMusica.svelte';
    import Tarjeta from '$lib/components/Tarjeta.svelte';

    const { data } = $props();
    import { tracksContext } from '$lib/context/tracks.svelte.js';
    
</script>

<section class="px-40 py-12">
    <div class="space-y-1">
        <p class="text-3xl font-bold">
            {#if tracksContext.current}
                {tracksContext.current.title}
            {/if}
        </p>
        <p class="text-lg">
            Curated sounds for your digital sanctuary. Pure, effortless, and
            serene.
        </p>
    </div>

    <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
    >
        {#each data.tracks as track}
           <Tarjeta track={track} />
        {/each}
    </div>

    <div> 
        <BarradeMusica />       
    </div>
</section>
