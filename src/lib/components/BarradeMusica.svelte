<script lang="ts">
    import Icon from "@iconify/svelte";
    import { tracksContext } from '$lib/context/tracks.svelte.js';

</script>
{#if tracksContext.current}
<div class="bg-white w-full h-16 rounded-3xl">
    <div class="p-2 my-6 bg-white rounded-3xl flex justify-between">
        <div class="flex items-center gap-4">
            <img
                src={tracksContext.current.album.thumbnail}
                alt=""
                class="w-30 h-30 rounded-3xl p-2"
            />
            <p class="font-bold text-xl">{tracksContext.current.title}</p>
        </div>

        <div class="flex items-center justify-center gap-4">
            <Icon icon="fluent:previous-20-regular" width="35px" />
            <div class="rounded-full bg-violet-600 p-4">
                <Icon icon="mdi:play" width="35px" />
            </div>
            <Icon icon="fluent:next-20-regular" width="35px" />
        </div>
    </div>
</div>
    
{/if}
