<script lang="ts">
    import type { Track } from "$lib/types/track";
    import { actualizarCancionActual } from "../context/tracks.svelte";

    interface PropTypes {
        track: Track;
        index: number;
    }
    const { track, index }: PropTypes = $props();

    const handlerClick = () => {
        actualizarCancionActual(track, index)
    }
</script>


<button onclick={handlerClick}>
<div class="p-2 my-6 rounded-3xl flex">
    <div>
        <img
            src={track.album.thumbnail}
            alt=""
            class="w-50 h-50 rounded-3xl p-2 object-cover"
        />
    </div>

    <div class="flex flex-col justify-center">
        <p class="font-bold text-xl text-white">{track.title}</p>
        <p class="font-semibold text-purple-300">{track.artist.name}</p>
    </div>
</div>
</button>

