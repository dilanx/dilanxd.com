<script lang="ts">
  import { page } from '$app/stores';
  export let title: O<string> = undefined;
  export let description: O<string> = undefined;
</script>

<svelte:head>
  {#if title}
    <title>{title} - Dilan Nair</title>
    <meta property="og:title" content={`${title} - Dilan Nair`} />
  {:else}
    <title>Dilan Nair</title>
    <meta property="og:title" content="Dilan Nair" />
  {/if}

  {#if description}
    <meta name="description" content={description} />
  {/if}

  <meta property="og:url" content={$page.url.href} />
</svelte:head>
