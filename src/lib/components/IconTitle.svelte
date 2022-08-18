<script lang="ts">
  export let icon: string;
</script>

<div>
  <i class={icon} />
  <p><slot /></p>
</div>

<style lang="scss">
  @use '../theme';

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  p {
    margin: 0;
    font-size: 32px;
    text-align: center;
  }

  i {
    font-size: 72px;
  }

  @include theme.lg {
    p {
      font-size: 40px;
    }
  }
</style>
