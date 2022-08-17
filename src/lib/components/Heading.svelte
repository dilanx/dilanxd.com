<script lang="ts">
  export let h1 = false;
  export let h2 = false;
  export let hidden = false;

  let className: string | undefined = undefined;
  export { className as class };
</script>

{#if h1}
  <h1 class:hidden class={className}><slot /></h1>
{/if}

{#if h2}
  <h2 class:hidden class={className}><slot /></h2>
{/if}

<style lang="scss">
  @use '../theme';

  h2 {
    color: theme.$text-primary;
    padding: 10px 0;
    margin: 0;
    font-size: 32px;
    text-align: center;
    font-weight: bold;
  }

  @include theme.lg {
    h2 {
      font-size: 40px;
      text-align: left;
    }
  }

  .hidden {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    -webkit-clip-path: inset(0px 0px 99.9% 99.9%);
    clip-path: inset(0px 0px 99.9% 99.9%);
    overflow: hidden;
    height: 1px;
    width: 1px;
    padding: 0;
    border: 0;
  }
</style>
