<script lang="ts">
  export let anchor: O<string> = undefined;
</script>

<!-- svelte-ignore a11y-missing-content -->
<a class="anchor" id={anchor} />

<style lang="scss">
  @use '../theme';

  a {
    display: block;
    position: relative;
    top: -100px;
    visibility: hidden;
  }
</style>
