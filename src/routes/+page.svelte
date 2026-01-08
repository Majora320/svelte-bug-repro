<script lang="ts">
    import Component from "$lib/component.svelte";

    const getData = () => Promise.resolve([1, 2, 3]);
</script>

<Component data={await getData()}/>
