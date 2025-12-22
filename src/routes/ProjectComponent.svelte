<script lang="ts">
    let { name, description } = $props();

    let status = $state()

    function open() {

    }
</script>

<h1> {name} </h1>
<p> {description} </p>
<button onclick={open}>See Project</button>

<style>
    h1{
        
    }
</style>