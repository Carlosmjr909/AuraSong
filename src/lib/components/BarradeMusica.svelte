<script lang="ts">
    import Icon from "@iconify/svelte";
    import { tracksContext } from "$lib/context/tracks.svelte.js";
    const audio = $state<{
        htmlAudio: null | HTMLAudioElement;
    }>({
        htmlAudio: null,
    });

    const handlerPlay = () => {
        if (audio.htmlAudio) {
            if (audio.htmlAudio.paused) {
                audio.htmlAudio.play();
            } else {
                audio.htmlAudio.pause();
            }
        }
    };
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
                <button
                    onclick={handlerPlay}
                    class="rounded-full bg-violet-600 p-4"
                >
                    <Icon icon="mdi:play" width="35px" />
                </button>
                <Icon icon="fluent:next-20-regular" width="35px" />
            </div>

            <audio src={tracksContext.current.audio} bind:this={audio.htmlAudio}
            ></audio>
        </div>
    </div>
{/if}
