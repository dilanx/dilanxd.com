<script lang="ts">
  export let anchor: string | undefined = undefined;
</script>

{#if anchor}
  <a class="button" href={'#' + anchor}>
    <i class="fa-solid fa-link" />
  </a>
  <!-- svelte-ignore a11y-missing-content -->
  <a class="anchor" id={anchor} />
{/if}

<style lang="scss">
  @use '../../theme';

  :global(h2:hover) a.button {
    opacity: 1;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.5;
    }
  }

  a.button {
    opacity: 0;
    font-size: 16px;
    vertical-align: middle;
    color: theme.$link-primary;
  }

  a.anchor {
    display: block;
    position: relative;
    top: -100px;
    visibility: hidden;
  }
</style>
