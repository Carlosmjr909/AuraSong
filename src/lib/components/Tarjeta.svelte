<script lang="ts">
    import type { Track } from "$lib/types/track";
    import { actualizarCancionActual } from "../context/tracks.svelte";

    interface PropTypes {
        track: Track;
    }
    const { track }: PropTypes = $props();
</script>


<button>
<div class="p-2 my-6 bg-white rounded-3xl flex">
    <div>
        <img
            src={track.album.thumbnail}
            alt=""
            class="w-30 h-30 rounded-3xl p-2"
        />
    </div>

    <div class="flex flex-col justify-center">
        <p class="font-bold text-xl">{track.title}</p>
        <p class="text-gray-500 text-lg font-semibold">
            {track.album.title}
        </p>
        <p class="font-semibold">{track.artist.name}</p>
    </div>
</div>
</button>

