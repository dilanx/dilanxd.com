<script lang="ts">
  export let big: boolean;
  export let open: boolean;
</script>

<div class:big class:open>
  <a href="/" on:click>
    <img src="/logo.svg" alt="Dilan Nair Logo" />
    <span>Dilan Nair</span>
  </a>
</div>

<style lang="scss">
  @use '../../theme';

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 50px;

    @include theme.lg2 {
      margin: 0 100px;
    }
  }

  a {
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
    opacity: 1;
    transition: opacity 150ms;
    color: theme.$nav-fg;
    display: flex;
    align-items: center;
    gap: 8px;

    .big:not(.open) & {
      color: theme.$nav-fg-big;
    }

    &:hover {
      opacity: 0.6;
    }

    img {
      width: 28px;
      height: 28px;
    }
  }
</style>
