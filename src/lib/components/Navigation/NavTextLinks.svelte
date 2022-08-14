<script lang="ts">
  import NavTextLink from './NavTextLink.svelte';

  export let big: boolean;
</script>

<ul class:big>
  <NavTextLink to="/projects" title="Projects" />
  <NavTextLink to="https://dilan.blog" title="Blog" />
  <NavTextLink to="https://status.dilanxd.com" title="Status" />
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
