<script lang="ts">
  import Anchor from '../Anchor.svelte';

  export let anchor: string | undefined = undefined;
</script>

{#if anchor}
  <a class="button" href={'#' + anchor}>
    <i class="fa-solid fa-link" />
  </a>
  <Anchor {anchor} />
{/if}

<style lang="scss">
  @use '../../theme';

  :global(h1:hover),
  :global(h2:hover),
  :global(h3:hover) {
    a.button {
      opacity: 1;
      &:hover {
        opacity: 0.8;
      }
      &:active {
        opacity: 0.5;
      }
    }
  }

  a.button {
    opacity: 0;
    font-size: 16px;
    vertical-align: middle;
    color: theme.$link-primary;
  }
</style>
