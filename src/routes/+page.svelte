<script>
    const { data } = $props();
</script>

<section class="px-40 py-12">
    <div class="space-y-1">
        <p class="text-3xl font-bold">Trending Now</p>
        <p class="text-lg">
            Curated sounds for your digital sanctuary. Pure, effortless, and
            serene.
        </p>
    </div>

    <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
    >
        {#each data.tracks as tracks}
            <div class="p-2 my-6 bg-white rounded-3xl flex">
                <div>
                    <img
                        src={tracks.album.thumbnail}
                        alt=""
                        class="w-full h-30 rounded-3xl p-2"
                    />
                </div>

                <div class="flex flex-col justify-center">
                    <p class="font-bold text-xl">{tracks.title}</p>
                    <p class="text-gray-500 text-lg font-semibold">
                        {tracks.album.title}
                    </p>
                    <p class="font-semibold">{tracks.artist.name}</p>
                </div>
            </div>
        {/each}
    </div>
</section>
