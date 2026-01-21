<script>
    import github from '$lib/assets/social-github.png';
    import linkedin from '$lib/assets/social-linkedin.png';
    import x from '$lib/assets/social-x.png';
    import pencil from '$lib/assets/pencil.png';
</script>

<div class=container>
    <a href="/">
        <p> Emma Xing </p>
    </a>
    <div class=logos>
        <a href="/writing">
            <img src={pencil}/>
        </a>
        <a href="https://www.linkedin.com/in/emmaxing/">
            <img src={linkedin}/>
        </a>
        <a href="https://github.com/emma-x1">
            <img src={github}/>
        </a>
        <a href="https://x.com/emm4x3">
            <img src={x}/>
        </a>
    </div>

    <div class=watering>
        <div style="display: flex; align-items: center; gap: 8px;">
            <a href="https://cs.uwatering.com/#emma-x1.github.io/?nav=prev">←</a>
            <a href="https://cs.uwatering.com/#emma-x1.github.io/" target="_blank">
                <img src="https://cs.uwatering.com/icon.black.svg" alt="CS Webring" style="width: 24px; height: auto; opacity: 0.8;"/>
            </a>
            <a href="https://cs.uwatering.com/#emma-x1.github.io/?nav=next">→</a>
        </div>
    </div>
</div>

<style>
    a{
        color: inherit;
        text-decoration: none;
    }
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
    }
    .logos{
        margin: 0.5rem;
        display: inline;
        align-items: center;
        gap: 2rem;
    }
    .logos img{
        height: 16px;
        width: auto;
    }
    .watering{
        margin: 0.5rem;
    }
</style>