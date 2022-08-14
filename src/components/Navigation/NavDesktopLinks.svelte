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
    display: none;

    @include theme.lg {
      margin-left: auto;
      margin-right: 50px;
      display: flex;
      align-items: center;
    }

    @include theme.lg2 {
      margin-right: 100px;
    }
  }
</style>
