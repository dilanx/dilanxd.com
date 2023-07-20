<script lang="ts">
  export let award = false;
  export let presentation = false;
</script>

<li>
  {#if award}
    <i class="fa-solid fa-trophy" style:color="#eab308" />
  {/if}
  {#if presentation}
    <i class="fa-solid fa-person-chalkboard" style:color="#22c55e" />
  {/if}
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

    span {
      color: #323232;
    }
  }
</style>
