<script lang="ts">
    let { data } = $props();
</script>

<ol>
    {#each data as item (item) }
        <li>Some data: {item}</li>
    {/each}
</ol>