<script>
// @ts-nocheck

  import { fly } from 'svelte/transition';
  import { onMount } from "svelte";
  import { Player, Ui ,DefaultUi , Video } from '@vime/svelte';
    export var id = "r"
    var detail = [1]
    var loading = true
    onMount(async ()=>{
        const res = await fetch("https://gogoanime.consumet.org/anime-details/"+id)
        detail  = await res.json()
        loading =false
    })

</script>
<main in:fly={{ y: -50, duration: 650, delay: 500 }} >
    <Player>
        <!-- Provider component is placed here. -->
        <Video crossorigin="" poster="https://media.vimejs.com/poster.png">
            <!-- These are passed directly to the underlying HTML5 `<video>` element. -->
            <!-- Why `data-src`? Lazy loading, you can always use `src` if you prefer.  -->
            <source data-src="https://media.vimejs.com/720p.mp4" type="video/mp4" />
            <track
              default
              kind="subtitles"
              src="https://media.vimejs.com/subs/english.vtt"
              srclang="en"
              label="English"
            />
          </Video>
        <Ui>
          <!-- UI components are placed here. -->
          <DefaultUi/>
        </Ui>
      </Player>
    <h1>episode</h1>
    <button on:click={()=>console.log(detail.episodesList)}>{id}</button>
    {#if loading==false}
    <div class="d flex flex-col-reverse">
    {#each detail.episodesList as item }    
    
    <button in:fly={{ y: -50, duration: 250, delay: 300 }} >{item.episodeNum}</button>
        
    {/each}
    </div>
    {/if}
   
   
</main>