const id = 100330;

export async function load({ fetch }) {
    const url = `https://api.artic.edu/api/v1/artworks/${id}?fields=id,image_id,title,artist_title,date_display,medium_display`;
    const req = await fetch(url);
    const res = await req.json();
    const work = res.data;
    return {work};
}