<main in:fly={{ y: -50, duration: 650, delay: 300 }}>
   <Header></Header>


    <RecentH></RecentH> 
    
    <!--recnent-->
    <h1 class="font-1 text-5xl text-slate-100 ">Recent</h1>
    <div class="jk" in:fly={{ y: -50, duration: 250, delay: 300 }} >

        {#each animep as item}
            <Card detail={item}></Card>
        {/each}

    </div>
    <button on:click={()=>console.log(animep)}>name</button>
    <Card4/>
    <Middle/>
   
</main>

<script>
    import Card4 from '../components/Card4.svelte';
  import { fly } from 'svelte/transition';
  import { onMount } from "svelte";
  import Middle from "./middle.svelte";
  import RecentH from './RecentH.svelte';
  import Header from '../components/Header.svelte';
  import Carousel from 'svelte-carousel';
  import Card from "../components/Card.svelte";
  import CaroselCard from "../components/CaroselCard.svelte";
 
  var animep = []

    onMount(async ()=>{
        const res = await fetch("https://gogoanime.consumet.org/recent-release")
        animep  = await res.json()
    })



</script>
<style>
    .ri{
        background-color: aliceblue;
        display: flex;
        align-items: center;
        
        margin-right:90px;
        position: relative;
    }
    .lf{
        background-color: aliceblue;
        display: flex;
        align-items: center;
        border-radius: 2px;
        margin-left: 20px;
        width: 200px;
        position: relative;
    }
    .jk{
        overflow-y: hidden;
        display: flex;
        background-color: rgb(54, 54, 54);-webkit-box-shadow: inset 10px 10px 168px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: inset 10px 10px 168px 0px rgba(206, 206, 206, 0.75);
        box-shadow: inset 10px 10px 168px 0px rgba(0,0,0,0.75);
        
    }
</style>