<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import Navbar from './lib/Navbar.svelte';
  import "./app.css"
  import Watch from './pages/watch.svelte';
  import {Router ,Route} from 'svelte-routing'
  import Info from './pages/info.svelte';
  var name  = [1,3,45,7,8]
</script>

<main>
 
  <Router>
    <Route component={Navbar}></Route>
    <Route  path="/name/:id" let:params>
      <Watch id={params.id} />
    </Route>
    <Route path="/info/:id" let:params>
      <Info id={params.id}/>
    </Route>
  </Router>
 
  
</main>

<style globals>
  :root{
    background-color: #060606;
  }
</style>
