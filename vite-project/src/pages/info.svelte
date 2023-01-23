<main in:fly={{ y: -50, duration: 650, delay: 500 }}>
    <Header/>
    <div>name</div>
    <Videocomponent id={id}/>
</main>
<script>
 import {fly} from "svelte/transition"
 import Header from "../components/Header.svelte";
 import Videocomponent from "../lib/Videocomponent.svelte";
 export var id;

</script>
<style>
    div{
        color: aliceblue;
    }
</style>