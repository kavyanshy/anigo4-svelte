<main>


    <div class="main">
        <div class="left">
            <h1>eft</h1>
            <Player bind:this = {name} paused={jkk}>
                <!-- Provider component is placed here. -->
                <Hls version="latest" config="{hlsConfig}" poster="/media/poster.png">
                    <source data-src="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8" type="application/x-mpegURL" />
                  </Hls>
                
                <Ui>
                  <!-- UI components are placed here. -->
                  <DefaultUi/>
                </Ui>
              </Player>

        </div>
        <div class="right">
            <h1>Episodes</h1>
            <button on:mouseover={()=>jkk=!jkk}>name</button>
            <div class="ep">
                
                <div style="background-color: black;">total ep {1}</div>
                {#if loading==false}
                {#each detail.episodesList as i }
                <div class="epo">
                    <h1 style="margin-right: 10px;">num</h1>
                    <div style="width: 30%;">image</div>
                    <div>name</div>
                </div>
            {/each}
                {/if}
                
            </div>
        </div>

    </div>




</main>
<script>
  import { onMount } from "svelte";
  import { Player, Ui ,DefaultUi , Hls } from '@vime/svelte';
    var source=""
    var name;
    var detail=[]
    var loading = true
    var jkk=true
    var epi =[1,34,5]
    export var id;
    onMount(async ()=>{
        const res = await fetch("https://gogoanime.consumet.org/anime-details/"+id)
        detail  = await res.json()
        console.log(detail)
        loading=false
        source = detail.episodesList[0].episodeId
        
    })
    const hlsConfig={}
</script>
<style>
    div{
        color: aliceblue;
    }
    .main{
        display: flex;
        
    }
    .left{
        width: 60%;
        background-color: aliceblue;
    }
    .right{
        width: 40%;
    }
    .ep{
        height: 350px;
        margin-left: 20px;
        background-color: rgb(15, 15, 15);
        overflow-y: scroll;
    }
    .epo{
        background-color: black;
        margin: 10px;
        padding: 10px;
        display: flex;

    }
</style>
