<script lang="ts">
  import NavIconLinks from './NavIconLinks.svelte';
  import NavTextLinks from './NavTextLinks.svelte';

  export let big: boolean;
</script>

<div>
  <NavTextLinks {big} />
  <NavIconLinks {big} />
</div>

<style lang="scss">
  @use '../../theme';
  div {
    position: relative;
    top: 10%;
    width: 100%;
    text-align: center;

    @include theme.lg {
      display: none;
    }
  }
</style>
