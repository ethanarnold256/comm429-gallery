<script>
    export let data;
    const {art} = data;
</script>

<h1>Gallery</h1>
<div class="gallery">
    {#each art as work}
        <figure>
            <img src="{`https://www.artic.edu/iiif/2/${work.image_id}/full/843,/0/default.jpg`}">
            <figcaption>
                {work.artist_title}<br />
                <span class="title">{work.title}</span> {work.date_display}<br />
                {work.medium_display}
            </figcaption>
        </figure>
    {/each}
</div>

<style>
    :root {
        --image-size: 7cm;
    }
    div.gallery {
        display: flex;
        flex-wrap: wrap;
        gap: 1cm;
    }

    figure {
        margin: 0;
        width: var(--image-size);
    }

    figure img {
        height: var(--image-size);
        width: var(--image-size);
        object-fit: contain;
        object-position: bottom;
    }

    figure figcaption span.title {
        font-weight: bold;
        font-size: 1.25em;
        font-style: italic;
    }

    figure:hover figcaption span.title {
        color: chocolate;
    }
</style>