<script lang="ts">
    import Icon from "@iconify/svelte";
    import Tarjeta from "$lib/components/Tarjeta.svelte";

    interface PropTypes {
        track: Track;
    }
    const { track }: PropTypes = $props();
</script>

<div class="bg-white w-full h-16 rounded-3xl">
    <div class="p-2 my-6 bg-white rounded-3xl flex justify-between">
        <div class="flex items-center gap-4">
            <img
                src={track.album.thumbnail}
                alt=""
                class="w-30 h-30 rounded-3xl p-2"
            />
            <p class="font-bold text-xl">{track.title}</p>
        </div>

        <div class="flex items-center justify-center gap-4">
            <Icon icon="fluent:previous-20-regular" width="35px" />
            <div class="rounded-full bg-violet-600 p-4">
                <Icon icon="mdi:play" width="35px" />
            </div>
            <Icon icon="fluent:next-20-regular" width="35px" />
        </div>

        <div></div>
    </div>
</div>
