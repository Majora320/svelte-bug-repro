<script lang="ts">
    import Component from "$lib/component.svelte";
    import { getData } from "./data.remote";
</script>

<h1>Welcome to SvelteKit</h1>
<p>
    Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
    documentation
</p>
<svelte:boundary>
    <Component data={await getData()} />
</svelte:boundary>
