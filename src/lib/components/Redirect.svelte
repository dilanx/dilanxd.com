<script lang="ts">
  import { onMount } from 'svelte';

  export let to: string;

  onMount(() => {
    window.location.replace(to);
  });
</script>

<div>Redirecting...</div>

<style lang="scss">
  div {
    padding: 24px;
  }
</style>
