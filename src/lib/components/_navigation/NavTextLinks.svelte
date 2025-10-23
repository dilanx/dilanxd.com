<script lang="ts">
  import NavTextLink from './NavTextLink.svelte';

  export let big: boolean;
</script>

<ul class:big>
  <NavTextLink to="/projects" title="Projects" on:click />
  <NavTextLink to="/contact" title="Help" on:click />
  <NavTextLink to="https://dilan.statuspage.io" title="Status" on:click />
</ul>

<style lang="scss">
  @use '../../theme';

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;

    @include theme.lg {
      flex-direction: row;
      margin: 0 10px;
    }
  }
</style>
