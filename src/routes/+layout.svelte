<script>
    import '../components/global.css';
    import Nav from "../components/Nav.svelte";
</script>

<div class="page">
    <Nav />
    <slot />
</div>

<style>
    div.page {
        margin: auto;
        width: 80%;
    }
</style>