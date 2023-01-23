<main>

    <div class="d flex mt-8">
        <div class="logo">
            <h1 on:click={()=>opacity="0%"}>logo</h1>
        </div>
        <div class="middle">
            <input on:focus={()=>opacity="100%"} bind:value={search} on:keypress={chang1} on:focusout={()=>opacity="0%"}>
            <div>
                <button class="d bg-white" on:click={()=>navigate("/")}>
                    home
                </button>
                <h1>
                    name
                </h1>
                <h1>
                    name
                </h1>
                <h1>
                    name
                </h1>
            </div>
        </div>
        <div class="user  absolute right-3">
            <h1>user</h1>
        </div>
    </div>
    <div class="search" style="opacity:{opacity}">
        {#each search_anime as item}
            <button on:click={()=>navigate("info/"+item.animeId)}>{item.animeTitle}</button>
        {/each}
    </div>

</main>
<script>
import { navigate } from 'svelte-routing'
var opacity = "0%"
var nkk = "opacity:"+opacity+";"
var search = ""
var search_anime = []

async function chang1(){
    console.log(search)
    const res = await fetch("https://gogoanime.consumet.org/search?keyw="+search)
    search_anime = await res.json()
}

</script>
<style>
    .search{
        color: aliceblue;
        position: absolute;
        z-index: 3;
        width: 80vh;
        height: 60vh;
        top: 100px;
        border-radius: 20px;
        -webkit-box-shadow: -4px 10px 234px 74px rgba(0,0,0,0.57);
-moz-box-shadow: -4px 10px 234px 74px rgba(0,0,0,0.57);
box-shadow: -4px 10px 234px 74px rgba(0,0,0,0.57);
        left: 30%;
        background-color: #444444;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        transition: all 0.5s;
    }
    .search button{
        padding: 10px;
        background-color: #1E1E1E;
        margin: 10px;
    }
    h1 {
        color: rgb(38, 106, 167);
    }
    input{
        background-color: #1E1E1E;
        padding: 10px;
        border-radius: 10px;
        
        transition: all 1s;

    }
    input:focus{
        border-radius: 20px;
        outline: none;
        border-width: 1px;
        border-color: #444444;
    }
    .middle{
        position: relative;
        left: 36%;
        display: flex;
        flex-direction: column;

        
    }

    .middle div{
        display: flex;

    }
    .middle div h1{
        margin: 20px;
    }
</style>