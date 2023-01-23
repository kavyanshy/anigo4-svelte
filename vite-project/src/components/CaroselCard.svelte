<script>
  import { onMount } from "svelte";
  import Carousel from 'svelte-carousel';
  var animep=[]

    onMount(async ()=>{
        const res = await fetch("https://gogoanime.consumet.org/recent-release")
        animep  = await res.json()
    })
</script>

<main>
    <Carousel>
        {#if animep}
        {#each animep as item }
        <div>
            <h1>{item.animeTitle}</h1>
        </div>
    {/each}
        {/if}
    
</Carousel>
   
</main>
