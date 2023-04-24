<script lang="ts">
  import type { Badge } from '$lib/common';

  export let badge: Badge;
</script>

<div style:background-color={badge.color} class={badge.size || 'sm'}>
  <p>{badge.text}</p>
</div>

<style lang="scss">
  @use '../../theme';

  div {
    padding: 4px;
    border-radius: 8px;
    //border: 2px solid;
    backdrop-filter: blur(32px);
    -webkit-backdrop-filter: blur(32px);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

    &.sm {
      font-size: 11px;
    }

    &.md {
      font-size: 13px;
    }
  }

  p {
    margin: 0;
    font-weight: 800;
    letter-spacing: 1px;
    color: #ffffff;
  }
</style>
