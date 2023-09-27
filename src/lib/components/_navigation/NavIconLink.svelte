<script lang="ts">
  export let to: string;
  export let icon: string;
</script>

<li>
  <a href={to} target="_blank" rel="noreferrer"><i class={icon} /></a>
</li>

<style lang="scss">
  @use '../../theme';

  li {
    display: inline-block;
    margin: 0 4px;

    a {
      opacity: 0.6;
      transition: opacity 150ms;
      color: theme.$nav-fg;

      &:hover {
        opacity: 1;
      }

      i {
        font-size: 32px;
        vertical-align: middle;
        margin: 80px 0;
      }
    }

    @include theme.lg {
      a {
        opacity: 1;
        color: theme.$nav-fg;

        .big & {
          color: theme.$nav-fg-big;
        }

        &:hover {
          opacity: 0.6;
        }

        i {
          font-size: 28px;
          margin: 0;
        }
      }
    }
  }
</style>
