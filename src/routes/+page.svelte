
   <script lang="ts">
    import BarradeMusica from "$lib/components/BarradeMusica.svelte";
    import Tarjeta from "$lib/components/Tarjeta.svelte";
    import { guardarListaCanciones } from "$lib/context/tracks.svelte";

    const { data } = $props();

    $effect(() => {
        if (data.tracks) {
            guardarListaCanciones(data.tracks);
        }
    });
</script>

<section class="px-40 py-12">
    <div class="space-y-1">
        <p class="text-3xl font-bold text-white">
            Trending Now
        </p>
        <p class="text-lg text-purple-300">
            Curated sounds for your digital sanctuary. Pure, effortless, and
            serene.
        </p>
    </div>

    <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
        {#each data.tracks as track,index}
           <Tarjeta track={track} {index} />
        {/each}
    </div>

    <div> 
        <BarradeMusica/>       
    </div>
</section>
