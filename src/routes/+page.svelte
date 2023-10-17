<script>

    import { onMount } from "svelte";

    let cats = [];

    const BASE_URL = `https://api.thecatapi.com/v1`
    const api_key = `live_yBWH0otnDLXMNNVIjdb7j6vV0F5tMFOUcbbOJ4mNDcKWnOdscPe99331duAJQ4kL`

    onMount(async () => { 
        let res = await fetch(`${BASE_URL}/images/search?limit=4&breed_ids=beng,birm,bomb,drex,mcoo,norw,rblu,tang&api_key=${api_key}`); 
    	cats = await res.json(); 
        console.log(cats)
    })

    //https://api.thecatapi.com/v1/images/search?limit=4&breed_ids=beng,birm,bomb,drex,mcoo,norw,rblu,tang&api_key=live_yBWH0otnDLXMNNVIjdb7j6vV0F5tMFOUcbbOJ4mNDcKWnOdscPe99331duAJQ4kL
</script>

<h2>Welcome to the website that will poorly tell you about fish</h2>
<h3>Here are some examples you can find on my website:</h3>
<div class="home_blocks">
    {#each cats as cat}
        <div>
            <div class="img_blocks" style="background-image: url({cat.url})"></div>
            <p>{cat.breeds[0].name}</p>
            <p> hi am words, pls work</p>
        </div>
    {/each}
</div>
