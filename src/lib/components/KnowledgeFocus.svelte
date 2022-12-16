<script lang="ts">
  export let categories: KB.Category[];
  export let focus: O<string> = undefined;
  export let select: (name: string | undefined) => void;
</script>

<div class="container">
  <p>CATEGORIES</p>
  <div class="buttons">
    <button class:sel={!focus} on:click={() => select(undefined)}>
      <span>All</span>
    </button>
    {#each categories as { category }}
      <button class:sel={focus === category} on:click={() => select(category)}>
        {category}
      </button>
    {/each}
  </div>
</div>

<style lang="scss">
  @use '../theme';

  .container {
    margin: 12px 0;
  }

  p {
    text-align: center;
    font-size: 14px;
    margin: 4px 0;
    letter-spacing: 2px;
    font-weight: 800;
    color: theme.$kb-focus-text;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  button {
    @include theme.button;
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 14px;
    background-color: theme.$kb-focus-bg;
    color: theme.$kb-focus-fg;

    &:hover {
      background-color: theme.$kb-focus-bg-hover;
    }

    &:active {
      background-color: theme.$kb-focus-bg-active;
    }

    &.sel {
      border-color: theme.$kb-link-primary;
      background-color: theme.$kb-link-light;
      color: theme.$kb-link-primary;
    }

    span {
      font-weight: bold;
    }
  }
</style>
