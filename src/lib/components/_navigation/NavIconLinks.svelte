<script lang="ts">
  import NavIconLink from './NavIconLink.svelte';

  export let big: boolean;
</script>

<ul class:big>
  <NavIconLink to="https://instagram.com/dilan4k" icon="fab fa-instagram" />
  <NavIconLink to="https://github.com/dilanx" icon="fab fa-github" />
  <NavIconLink to="https://linkedin.com/in/dilann" icon="fab fa-linkedin" />
</ul>

<style lang="scss">
  @use '../../theme';

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    @include theme.lg {
      margin: 0 10px;
    }
  }
</style>
