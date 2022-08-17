<script lang="ts">
  export let sm = false;
  export let md = false;

  export let className: string | undefined = undefined;
  export { className as class };
</script>

<p class:sm class:md class={className}><slot /></p>

<style lang="scss">
  @use '../theme';

  p {
    line-height: 200%;
    padding: 10px 0;
    margin: 0;
    color: theme.$text-primary;

    &.sm {
      font-size: 16px;
    }

    &.md {
      font-size: 16px;
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

  @include theme.lg {
    p {
      &.md {
        font-size: 20px;
        text-align: left;
      }
    }
  }
</style>
