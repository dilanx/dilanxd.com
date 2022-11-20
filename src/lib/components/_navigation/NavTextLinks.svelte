<script lang="ts">
  import NavTextLink from './NavTextLink.svelte';

  export let big: boolean;
</script>

<ul class:big>
  <NavTextLink to="/projects" title="Projects" on:click />
  <NavTextLink to="https://dilan.blog" title="Blog" on:click />
  <NavTextLink to="https://dilan.statuspage.io" title="Status" on:click />
</ul>

<style lang="scss">
  @use '../../theme';

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    @include theme.lg {
      margin: 0 10px;
    }
  }
</style>
