<script lang="ts">
  export let h1: boolean;
  export let h2: boolean;
  export let h3: boolean;
  export let hidden: boolean;
  export let large: boolean;
  export let id: string | undefined;
  export let className: string | undefined;
</script>

{#if h1}
  <h1 class:hidden class:large {id} class={className}><slot /></h1>
{/if}

{#if h2}
  <h2 class:hidden class:large {id} class={className}><slot /></h2>
{/if}

{#if h3}
  <h3 class:hidden class:large {id} class={className}><slot /></h3>
{/if}

<style lang="scss">
  @use '../../theme';

  h1 {
    text-align: center;
    &.large {
      font-size: 40px;
    }
  }

  h2 {
    color: theme.$text-primary;
    padding: 10px 0;
    margin: 0;
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    &.large {
      font-size: 32px;
    }
  }

  h3 {
    font-size: 20px;
    font-weight: normal;
    margin: 0;
    text-align: left;
    &.large {
      text-align: center;
      font-size: 28px;
      font-weight: 500;
    }
  }

  @include theme.lg {
    h1 {
      &.large {
        font-size: 64px;
      }
    }
    h2 {
      text-align: left;
      &.large {
        font-size: 40px;
      }
    }

    h3 {
      &.large {
        text-align: left;
      }
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
