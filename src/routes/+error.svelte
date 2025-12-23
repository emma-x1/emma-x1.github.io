<script lang="ts">
    import flower1 from '$lib/assets/flower1-dark.png'
    import flower2 from '$lib/assets/flower2-dark.png'
    import flower3 from '$lib/assets/flower3-dark.png'
</script>

<div class="error">
    <div class="error-content">
        <h1>Page Not Found.</h1>
        <a href="/">Try again?</a>
    </div>
    <div class="error-flowers">
        <img src={flower1}>
        <img src={flower2}>
        <img src={flower3}>
    </div>
</div>

<style>
    :root {
        --main-light:#F2E9E4;
        background-color: var(--main-light);
    }

    .error {
        width: 100%;
        height: 85vh;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
    }

    .error-content {
        text-align: center;
        max-width: 40rem;
        padding: 2rem;
        gap: 1rem;
    }

    .error-content a {
        margin-right: 1rem;
        display: inline-block;
    }

    .error-flowers {
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    .error-flowers img {
        height: 4rem;
        opacity: 0.8;
    }
</style>