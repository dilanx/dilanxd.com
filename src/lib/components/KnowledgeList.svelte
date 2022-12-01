<script lang="ts">
  export let title: string;
  export let links: LinkData[];
  export let focused = false;
</script>

<div class="container" class:focused>
  <div class="title">
    <p>{title}</p>
  </div>
  <div class="links">
    <ul>
      {#each links as { text, to }}
        <li>
          <a href={to}>{text}</a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style lang="scss">
  @use '../theme';

  .container {
    padding: 24px;
    border-radius: 24px;
    margin: 16px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    &.focused {
      margin: 16px auto;
      max-width: 480px;
    }
  }

  .title {
    margin-bottom: 32px;

    p {
      width: 100%;
      margin: 0;
      text-align: center;
      font-size: 24px;
      color: black;
      font-weight: bold;
    }
  }

  .links {
    ul {
      list-style: none;
      padding: 0 12px;
      margin: 0;
    }
    li {
      padding: 8px 0;

      &:not(:last-child) {
        border-bottom: 1px solid #e0e0e0;
      }
    }
    a {
      color: theme.$kb-link-primary;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
