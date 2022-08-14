<p><slot /></p>

<style lang="scss">
  @use '../../theme';

  p {
    font-size: 28px;
    font-weight: 500;
    margin: 0;
  }

  @include theme.lg {
    p {
      font-size: 48px;
      font-weight: bold;
    }
  }
</style>
