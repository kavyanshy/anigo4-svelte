

    <div class="main" on:mouseenter={()=>paused=!paused} on:mouseleave={()=>paused=!paused}>
        <div class="detail">
            name
            <div class="img1">k</div>
        </div>
        <div class="video" style="box-shadow: inset 20px 20px 20px black;">
            
            <Player  paused={paused}>
                <!-- Provider component is placed here. -->
                <Hls version="latest" config="{hlsConfig}" poster="/media/poster.png">
                    <source data-src="https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8" type="application/x-mpegURL" />
                  </Hls>
                
              </Player>

        </div>
       
    </div>



<script>
import { Player, Ui ,DefaultUi , Hls } from '@vime/svelte';
var paused = true
var hlsConfig ={}
</script>

<style>
    .main{
        color:aqua;
        width: 300px;
        background-color: aliceblue;
        transition: all 0.7s;
    }
    .detail{
        position: absolute;
        z-index: 2;
        width: 300px;
        height: 168px;

    }
    .main:hover{
        scale: 1.2;
    }
    .img1{
       
        
    }
</style>