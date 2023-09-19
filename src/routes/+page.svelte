<script>
    import HomeTiles from "../lib/components/HomeTiles.svelte";
    let fishes = [
        {"name": "Discus", "url_link": "../img/discus2.jpg"},
        {"name": "Royal Blue Tang", "url_link": "../img/blue2.jpg"},
        {"name": "Betta", "url_link": "../img/betta3.jpg"},
        {"name": "Goldfish", "url_link": "../img/gold3.jpg"}
    ]
</script>

<h2>Welcome to the website that will poorly tell you about fish</h2>
<h3>Here are some examples you can find on my website:</h3>
<div class="home_blocks">
    {#each fishes as fish}
        <HomeTiles name="{fish}", url_link="{url_link}" />
    {/each}
</div>
