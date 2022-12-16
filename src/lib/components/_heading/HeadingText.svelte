<script lang="ts">
  import HeadingAnchor from './HeadingAnchor.svelte';

  export let h1: boolean;
  export let h2: boolean;
  export let h3: boolean;
  export let hidden: boolean;
  export let large: boolean;
  export let anchor: string | undefined;
  export let className: string | undefined;
  export let topic: O<string>;
</script>

{#if topic}
  <p>{topic}</p>
{/if}

{#if h1}
  <h1 class:hidden class:large class={className}>
    <slot />
    <HeadingAnchor {anchor} />
  </h1>
{/if}

{#if h2}
  <h2 class:hidden class:large class={className}>
    <slot />
    <HeadingAnchor {anchor} />
  </h2>
{/if}

{#if h3}
  <h3 class:hidden class:large class={className}>
    <slot />
    <HeadingAnchor {anchor} />
  </h3>
{/if}

<style lang="scss">
  @use '../../theme';

  * {
    color: theme.$text-primary;
  }

  p {
    text-align: center;
    font-size: 18px;
    margin: 12px 0;
    letter-spacing: 4px;
  }

  h1 {
    text-align: center;
    padding: 0 24px;
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
