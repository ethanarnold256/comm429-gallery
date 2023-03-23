<script>
    export let data;
    const {work} = data;
</script>

<div class="grid">
    <a href="{`https://www.artic.edu/iiif/2/${work.image_id}/full/843,/0/default.jpg`}">
        <img src="{`https://www.artic.edu/iiif/2/${work.image_id}/full/843,/0/default.jpg`}">
    </a>
    <div class="data">
        <h1>{work.title} ({work.date_display}) - {work.artist_title}</h1>
        <strong>Title:</strong> {work.title}<br />
        <strong>Artist:</strong> {work.artist_title}<br />
        <strong>Date:</strong> {work.date_display}<br />
        <strong>Medium:</strong> {work.medium_display}<br />
        <strong>ID #:</strong> {work.id}
    </div>
</div>

<style>
    div.grid {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1cm;
    }

    div.grid img {
        width: 100%;
        height: 100%;
    }
</style>