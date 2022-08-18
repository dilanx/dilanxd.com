<script lang="ts">
  export let sm = false;
  export let md = false;
  export let lg = false;
</script>

<div class:sm class:md class:lg><slot /></div>

<style lang="scss">
  @use '../theme';

  .sm {
    margin: 8px 0;
  }

  .md {
    margin: 16px 0;
  }

  .lg {
    margin: 32px 0;
  }
</style>
