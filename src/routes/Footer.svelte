<script>
    import github from '$lib/assets/social-github.png';
    import linkedin from '$lib/assets/social-linkedin.png';
    import x from '$lib/assets/social-x.png';
</script>

<div>
    <p> Emma Xing </p>
    <div class=logos>
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
</div>

<style>
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
    }
    .logos{
        display: inline;
        align-items: center;
        gap: 2rem;
    }
    .logos img{
        height: 16px;
        width: auto;
    }
</style>