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
    color: #c0c0c0;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  button {
    @include theme.button;
    //border: 2px solid #808080;
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 14px;
    background-color: #e9e9e9;
    color: #505050;

    &:hover {
      background-color: #f4f4f4;
    }

    &:active {
      background-color: #fafafa;
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
