<script>
    const links = [
        {'label': 'Home', 'href': '/'},
        {'label': 'Gallery', 'href': '/Gallery'}
    ]
</script>

<main>
    <ul>
        {#each links as link}
            <li><a href="{link.href}">{link.label}</a></li>
        {/each}
    </ul>
</main>