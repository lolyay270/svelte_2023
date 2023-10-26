<script>
    import { onMount } from "svelte";
    const obj = {
        url: `url here`,
        id: `id here`,
    };
    let cats = [];

    const BASE_URL = `https://api.thecatapi.com/v1`
    const API_KEY = `live_yBWH0otnDLXMNNVIjdb7j6vV0F5tMFOUcbbOJ4mNDcKWnOdscPe99331duAJQ4kL`
    const CAT_IDS = [`beng`, `birm`, `bomb`, `drex`, `mcoo`, `norw`, `rblu`, `tang`]

    //onmount for looping thru each id i want, then filling an array of objects with the url and id 
    onMount(async () => { 
        CAT_IDS.forEach(id, i => {
            let res = await fetch(`${BASE_URL}/images/search?limit=5&breed_ids=${id}&api_key=${API_KEY}`); 
            let data = await res.json();
            obj.url = data.url;
            obj.id = id;
            cats.push(obj);
        });
    })
</script>

<div> <!-- container for component -->
    <h2></h2> <!-- cat name big when hover color white, other h2 color grey -->
    <div> <!-- container for imgs (hide until hover h2)-->
        <img />
        <img /> 
        <img /> <!-- all imgs from fetch -->
        <img /> 
        <img /> 
    </div>
</div>

<!-- inspiration:    https://www.coulisse-gallery.com/artists -->