<script>
    import axios from "axios";

    const tracks = axios.get('https://leonardoapi.vercel.app/api/tracks')
</script>

{#await tracks}
    esperate mijo
{:then respuesta} 

    {#each respuesta.data.tracks as tracks}
    <div class="p-2">
       <p class="font-bold">{tracks.title}</p>
       <p class="text-gray-500">{tracks.album.title}</p>  
       </div>   
    {/each}
{/await}