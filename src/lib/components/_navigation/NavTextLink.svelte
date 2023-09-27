<script lang="ts">
  import { afterNavigate } from '$app/navigation';

  export let to: string;
  export let title: string;

  let active = false;

  afterNavigate(() => {
    active = window.location.pathname.startsWith(to);
  });
</script>

<li>
  <a class:active href={to} on:click>{title}</a>
</li>

<style lang="scss">
  @use '../../theme';

  li {
    display: block;
    margin: 0;
    font-size: 56px;
    font-weight: 900;
    letter-spacing: 4px;

    a {
      text-decoration: none;
      color: theme.$nav-fg;
      opacity: 0.3;
      transition: opacity 150ms;

      &.active,
      &:hover,
      &:focus {
        opacity: 1;
      }
    }

    @include theme.lg {
      display: inline-block;
      margin: 0;
      font-size: 14px;
      font-weight: normal;
      letter-spacing: 1px;

      a {
        --color: #{theme.$nav-fg};
        --color-hover: #{theme.$nav-bg-hover};
        --color-active: #{theme.$nav-fg-active};

        .big & {
          --color: #{theme.$nav-fg-big};
          --color-hover: #{theme.$nav-bg-big-hover};
          --color-active: #{theme.$nav-fg-big-active};
        }

        font-size: 14px;

        opacity: 1;
        transition: background-color 150ms;
        color: var(--color);
        padding: 4px;
        border-radius: 4px;

        &:hover {
          background-color: var(--color-hover);
        }

        &.active {
          color: var(--color-active);
        }
      }
    }
  }
</style>
