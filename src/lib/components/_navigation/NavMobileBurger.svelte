<script lang="ts">
  export let big: boolean;
  export let open: boolean;
</script>

<div class:big class:open class="layer-0">
  <button class="layer-1" on:click>
    <div class="layer-2" />
  </button>
</div>

<style lang="scss">
  @use '../../theme';

  .layer-0 {
    margin-left: auto;
    margin-right: 50px;
    height: 26px;
  }

  .layer-1 {
    width: 20px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    margin: 0;
  }

  .layer-1:before,
  .layer-1:after,
  .layer-2 {
    content: '';
    display: block;
    height: 2px;
    border-radius: 3px;
    margin: 5px 0;
    transition: 0.5s;
    box-sizing: border-box;

    background: theme.$nav-fg;

    .big:not(.open) & {
      background: theme.$nav-fg-big;
    }
  }

  .open {
    .layer-1:before {
      transform: translateY(7px) rotate(135deg);
    }
    .layer-1:after {
      transform: translateY(-7px) rotate(-135deg);
    }
    .layer-2 {
      transform: scale(0);
    }
  }

  @include theme.lg {
    .layer-0 {
      display: none;
    }
  }
</style>
