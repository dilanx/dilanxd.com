<script lang="ts">
  export let to: string;
  export let newTab: boolean | undefined = undefined;
  export let icon: string | undefined = undefined;
  export let sublink: boolean | undefined = undefined;
</script>

<a href={to} target={newTab ? '_blank' : ''} class:sublink>
  {#if icon}
    <i class={icon} />
  {/if}
  <slot />
</a>

<style lang="scss">
  @use '../../theme';

  a {
    color: inherit;
    text-decoration: none;
    display: inline-block;
    margin: 8px;

    i {
      margin-right: 5px;
    }

    &:not(.sublink) {
      &:after {
        display: block;
        content: '';
        border-bottom: 1px solid;
        border-bottom-color: inherit;
        transform: scaleX(0);
        transition: transform 250ms ease-out;
        transform-origin: 100% 50%;
      }
      &:hover:after {
        transform: scaleX(1);
        transform-origin: 0% 50%;
      }
    }

    &.sublink {
      color: #a3a3a3;
      transition: color 150ms;
      margin: 0 8px;
      display: block;
      &:hover {
        color: inherit;
      }
    }
  }
</style>
