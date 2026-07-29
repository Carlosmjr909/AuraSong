<script>
    const { data } = $props()
</script>

    {#each data.tracks as tracks}
    <div class="p-2">
       <p class="font-bold">{tracks.title}</p>
       <p class="text-gray-500">{tracks.album.title}</p>  
       </div>   
    {/each}
