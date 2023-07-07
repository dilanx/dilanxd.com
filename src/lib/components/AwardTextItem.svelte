<script lang="ts">
</script>

<li>
  <i class="fas fa-trophy" />
  <span>
    <slot />
  </span>
</li>

<style lang="scss">
  @use '../theme';

  li {
    display: flex;
    align-items: center;
    gap: 8px;

    color: #eab308;

    span {
      color: #323232;
    }
  }
</style>
