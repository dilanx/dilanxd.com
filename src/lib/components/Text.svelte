<script lang="ts">
  export let xs = false;
  export let sm = false;
  export let md = false;
  export let lg = false;
  export let xl = false;
  export let center = false;
  export let bold = false;
  export let nom = false;
  export let centerOnMobile = false;
  let className: string | undefined = undefined;
  export { className as class };
</script>

<p
  class:xs
  class:sm
  class:md
  class:lg
  class:xl
  class:center
  class:bold
  class:nom
  class:centerOnMobile
  class={className}
>
  <slot />
</p>

<style lang="scss">
  @use '../theme';

  p {
    line-height: 200%;
    padding: 10px 0;
    margin: 0;
    color: theme.$text-primary;

    font-size: 16px;

    &.xs {
      font-size: 14px;
    }

    &.sm {
      font-size: 16px;
    }

    &.md {
      font-size: 16px;
    }

    &.lg {
      font-size: 20px;
    }

    &.xl {
      font-size: 24px;
    }

    &.nom {
      padding: 0;
    }

    &.centerOnMobile,
    &.center {
      text-align: center;
    }

    &.bold {
      font-weight: bold;
    }

    :global(a) {
      color: theme.$link-primary;
      text-decoration: none;
      text-underline-offset: 2px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  :global(ul) {
    margin: 4px;
  }

  @include theme.lg {
    p {
      &.xs {
        font-size: 14px;
      }
      &.sm {
        font-size: 16px;
      }
      &.md {
        font-size: 20px;
      }
      &.lg {
        font-size: 28px;
      }
      &.xl {
        font-size: 32px;
      }
      &.centerOnMobile {
        text-align: left;
      }
    }
  }
</style>
