<script lang="ts">
    import Component from "$lib/component.svelte";
    import { getData } from "./data.remote";
</script>

<svelte:boundary>
    <Component data={await getData()} />
</svelte:boundary>
