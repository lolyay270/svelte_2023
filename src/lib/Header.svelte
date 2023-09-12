<script>
    import Nav from "$lib/Nav.svelte";
    import { onMount } from "svelte";

    let isSticky = false;
    onMount(() => {
        document.addEventListener("wheel", (event) => {            
            isSticky = event.deltaY < 0;                     
        });
    })
    
</script>

<header class={isSticky ? 'sticky' : 'notSticky'}>
    <Nav />
    <div class="fishes">
        <i class="fa-solid fa-fish-fins"></i>
        <i class="fa-solid fa-fish-fins"></i>
        <i class="fa-solid fa-fish-fins"></i>
    </div>
    <h1 class="logo">Fishie Facts</h1>
</header>