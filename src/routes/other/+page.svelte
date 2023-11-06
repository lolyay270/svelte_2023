<script>
    export let data;
    console.log(data.cats);
    // console.log(`length = ${data.cats.length}`)
</script>

<!-- <div class="contain">
    {#each data.cats as cat}
            <h2>{cat.breed}</h2>
            {#each cat.urls as url}
                <img src="{url}" alt="{cat.breed}"/>
            {/each}
    {/each}
</div> -->



<div class="not_this_one"> <!-- container for component -->
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