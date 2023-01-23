<main>
    <div class="f flex">
        <div class="left">
            <h1 class="e text-xl text-slate-100">left</h1>
            <Card2/>
        </div>
        <div class="right">
            <h1 class="t text-xl text-slate-100">name</h1>
            <Card3 bgc="#170535"></Card3>
            <Card3 bgc="#062D34"></Card3>
        </div>
    </div>
</main>

<script>
   
    import Card2 from "../components/Card2.svelte";
    import Card3 from "../components/Card3.svelte";
</script>


<style>
    .left{
        background-color: #060606;
        width: 60%;
    }
    .right{
        background-color: #060606;
        width: 40%;
    }

</style>

