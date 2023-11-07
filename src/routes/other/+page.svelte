<script>
    export let data;
    console.log(data.cats);
    // console.log(`length = ${data.cats.length}`)
</script>

<div class="contain">
    {#each data.cats as cat}
            <h2>{cat.breed}</h2>
            {#each cat.urls as url}
                <img src="{url}" alt="{cat.breed}"/>
            {/each}
    {/each}
</div>

<!-- inspiration:    https://www.coulisse-gallery.com/artists -->