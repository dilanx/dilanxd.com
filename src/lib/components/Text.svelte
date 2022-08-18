<script lang="ts">
  export let xs = false;
  export let sm = false;
  export let md = false;
  export let noPadding = false;
  export let centerOnMobile = false;
  let className: string | undefined = undefined;
  export { className as class };
</script>

<p
  class:xs
  class:sm
  class:md
  class:noPadding
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

    &.xs {
      font-size: 14px;
    }

    &.sm {
      font-size: 16px;
    }

    &.md {
      font-size: 16px;
    }

    &.noPadding {
      padding: 0;
    }

    &.centerOnMobile {
      text-align: center;
    }

    :global(a) {
      color: theme.$link-primary;
      text-decoration: none;

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
      &.md {
        font-size: 20px;
      }
      &.centerOnMobile {
        text-align: left;
      }
    }
  }
</style>
