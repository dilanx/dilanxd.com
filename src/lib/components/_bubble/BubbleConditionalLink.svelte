<script lang="ts">
  export let to: string | undefined = undefined;
  export let newTab = false;
</script>

{#if to}
  <a href={to} target={newTab ? '_blank' : undefined}>
    <slot />
  </a>
{:else}
  <div>
    <slot />
  </div>
{/if}

<style lang="scss">
  @use '../../theme';

  div,
  a {
    text-decoration: none;
    display: block;
    margin: 20px 0;
    padding: 0;
    opacity: 1;
    transition: opacity 150ms;
  }

  @include theme.lg {
    div,
    a {
      margin: 0;
    }
  }
</style>
