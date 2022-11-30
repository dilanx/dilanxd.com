<div>
  <slot />
</div>

<style lang="scss">
  @use '../theme';

  @include theme.lg {
    div {
      display: flex;
    }
  }
</style>
