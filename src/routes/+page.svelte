<script>
    import Header from './Header.svelte';
    import Work from './Work.svelte';
    import Projects from './Projects.svelte';
    import Misc from './Misc.svelte';
    import Divider from './Divider.svelte';
    import Footer from './Footer.svelte';
</script>

<Header />
<Divider />
<!--
<Work />
<Divider />
<Projects />
<Divider />
<Misc />
<Divider />
-->
<Footer />




<style lang="css">
:root {
    --main-light:#F2E9E4;
    background-color: var(--main-light);
}

h1 {
    font-family: sans-serif;
}

h2 {
    font-family: sans-serif;
}

p {
    font-family: sans-serif;
}

</style>