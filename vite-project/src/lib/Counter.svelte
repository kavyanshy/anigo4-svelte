<script>
  import { identity } from "svelte/internal";


  let count = 0
  const increment = () => {
    count += 1
  }
$: double = count*2
export var id;
</script>

<button on:click={increment}>
  count is {count}
</button>
<h1>{id}</h1>
