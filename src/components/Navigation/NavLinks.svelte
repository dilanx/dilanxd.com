<script lang="ts">
  export let desktop: boolean;
</script>

<div class:desktop>
  <ul class="text" />
  <ul class="icon" />
</div>

<style lang="scss">
  @use '../../theme';

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @include theme.sm {
    div {
      position: relative;
      top: 10%;
      width: 100%;
      text-align: center;
    }
  }

  @include theme.lg {
    div {
      margin-left: auto;
      margin-right: 50px;
      display: flex;
      align-items: center;
    }

    ul {
      margin: 0 10px;
    }
  }

  @include theme.lg2 {
    div {
      margin-right: 100px;
    }
  }
</style>
