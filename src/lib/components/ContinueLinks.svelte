<script lang="ts">
  import type { ContinueLink } from '$lib/common';

  export let links: ContinueLink[];

  export let margin = false;
</script>

<div class:margin>
  {#each links as { to, text, icon }}
    <a href={to}>
      {#if icon}
        <i class={icon} />
        {text}
      {:else}
        {text}
        <i class={icon || 'fas fa-arrow-right'} />
      {/if}
    </a>
  {/each}
</div>

<style lang="scss">
  @use '../theme';

  div {
    margin: 8px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &.margin {
      margin: 24px;
    }
  }

  a {
    color: #808080;
    text-decoration: none;
    transition: opacity 150ms;
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    padding: 8px 16px;
    border-radius: 12px;
    transition: all 150ms;

    &:hover {
      background-color: #f0f2f4;
      color: black;
    }

    &:active {
      background-color: #e0e2e4;
    }

    i {
      margin: 0 4px;
    }
  }
</style>
