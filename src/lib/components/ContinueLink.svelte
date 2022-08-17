<script lang="ts">
  export let to: string;

  export let margin = false;
</script>

<div class:margin>
  <a href={to}>
    <slot />
    <i class="fas fa-arrow-right" />
  </a>
</div>

<style lang="scss">
  @use '../theme';

  div {
    margin: 8px;
    text-align: center;
    &.margin {
      margin: 24px;
    }
  }

  a {
    color: #808080;
    text-decoration: none;
    transition: opacity 150ms;
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    padding: 8px 16px;
    border-radius: 12px;
    transition: all 150ms;

    &:hover {
      background-color: #f0f2f4;
      color: black;
    }

    &:active {
      background-color: #e0e2e4;
    }
  }
</style>
