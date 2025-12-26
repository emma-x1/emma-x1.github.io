<script>
    import Header from '$lib/components/Header.svelte';
    import Work from '$lib/components/Work.svelte';
    import Projects from '$lib/components/Projects.svelte';
    import Misc from '$lib/components/Misc.svelte';
    import Divider from '$lib/components/Divider.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>


<main class="page">
    <Header />
    <Divider />
    <Work />
    <Divider />
    <!--
    <Projects />
    <Divider />
    -->
    <Misc />
    <Divider />
    <Footer />  
</main>

<style lang="css">
:root {
    --main-light:#F2E9E4;
    background-color: var(--main-light);
}

.page{
    display: flex;
    flex-direction: column;
    gap: 1rem;
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