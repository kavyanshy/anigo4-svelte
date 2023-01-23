<script>
// @ts-nocheck

    export var detail = "anem"
    import { navigate } from 'svelte-routing'

</script>

<main>
    <div class="card">
        <div class="card-image"> <img src={detail.animeImg} alt="anime image" />   </div>
          <div class="card-description">
            <p class="text-title"> {detail.animeTitle}</p>
            <p class="text-body"  >
                <button class="bg-sky-500 p-2 rounded-xl" on:click={()=>navigate("/info/"+detail.animeId)}>watch</button>
            </p>
          </div>
        </div>

</main>
<style>
    .card {
 height: 254px;
 width: 190px;
 position: relative;
 transition: all 0.05s cubic-bezier(0.645, 0.045, 0.355, 1);
 border-radius: 1em;

 margin: 10px
 ;
}

 /*Image*/
.card-image {
 height: 100%;
 width: 100%;
 position: absolute;
 transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
 background: #0a3394;
 background: linear-gradient(to top, #0a3394, #4286f4);
}

/*Description */
.card-description {
 display: flex;
 position: absolute;
 gap: 1em;
 flex-direction: column;
 background-color: #f5f5f5;
 height: 70%;
 bottom: 0;
 border-radius: 1em 1em 0 0;
 transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
 padding: 1rem;
 transform: translateY(100%);
}


/*Text*/
.text-title {
 font-weight: 700;
 text-overflow: ellipsis;
 height: 50px;
}

.text-body {
 font-size: 1em;
 line-height: 150%;
}


/* Hover states */

.card:hover .card-description {
 transform: translateY(0%);
}
.card:hover .card-image {
  opacity: 10%;
}

</style>