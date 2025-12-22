<script lang="ts">
    import circle from '$lib/assets/circle.png'
    let { name, title, time, desc } = $props();

    let status = $state()

    function open() {

    }
</script>

<div>
    <div class=text>
        <h1> {name} </h1>
        <p> {title} </p>
        <em><p> {time} </p></em>
        <p> {desc} </p>
    </div>
</div>

<style>
    div{
        display:inline
        padding:1rem;
    }
    img{
        height:32px;
        width:auto;
    }
    .text{
        text-align:center
    }
</style>