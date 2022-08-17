<script lang="ts">
</script>

<div>
  <slot />
</div>

<style lang="scss">
  @use '../theme';

  div {
    display: block;
  }

  @include theme.lg {
    div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    }
  }
</style>
