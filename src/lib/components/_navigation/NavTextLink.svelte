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
    font-weight: 800;

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
      margin: 0 10px;
      font-size: 14px;
      font-weight: normal;

      a {
        --color: #{theme.$nav-fg};

        .big & {
          --color: #{theme.$nav-fg-big};
        }

        opacity: 1;
        transition: none;
        color: var(--color);

        &:after {
          display: block;
          content: '';
          border-bottom: 1px solid var(--color);
          transform: scaleX(0);
          transition: transform 250ms ease-out;
          transform-origin: 100% 50%;
        }

        &.active:after {
          display: block;
          content: '';
          border-bottom: 1px solid var(--color);
          transform: scaleX(1);
        }

        &:not(.active) {
          &:hover:after,
          &:focus:after {
            transform: scaleX(1);
            transform-origin: 0% 50%;
          }
        }
      }
    }
  }
</style>
