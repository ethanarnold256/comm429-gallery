export async function load({ params }) {
    const url = `https://api.artic.edu/api/v1/artworks/${id}?fields=id,image_id,title,artist_title,date_display,medium_display`;
    const req = await fetch(url);
    const res = await req.json();
    const work = res.data;
    return {work};
}
