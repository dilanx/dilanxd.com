<script lang="ts">
  import { linkAttributes } from '$lib/common';

  export let links: LinkData[];

  export let margin = false;
  export let highlight = false;
  export let mobileVertical = false;
</script>

<div class:margin class:mobileVertical>
  {#each links.map( ({ to, text, icon }) => ({ ...linkAttributes(to), text, icon }) ) as { href, target, rel, text, icon }}
    <a {href} {target} {rel} class:highlight>
      {#if icon}
        <i class={icon} />
        <p>{text}</p>
      {:else}
        <p>{text}</p>
        <i class={icon || 'fas fa-arrow-right'} />
      {/if}
    </a>
  {/each}
</div>

<style lang="scss">
  @use '../theme';

  div {
    margin: 8px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    &.margin {
      margin: 24px;
    }

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: theme.$button-text;
      &.highlight {
        color: theme.$link-light;
      }
      text-decoration: none;
      transition: opacity 150ms;
      font-size: 18px;
      font-weight: 500;
      margin: 0;
      padding: 8px 16px;
      border-radius: 12px;
      transition: all 150ms;

      &:hover {
        background-color: theme.$button-bg-hover;
        color: theme.$button-text-hover;
        &.highlight {
          color: theme.$link-primary;
        }
      }

      &:active {
        background-color: theme.$button-bg-active;
        color: theme.$button-text-hover;
        &.highlight {
          color: theme.$link-primary;
        }
      }

      i {
        margin: 0;
      }
      p {
        margin: 0;
      }
    }

    &.mobileVertical {
      @include theme.sm {
        //flex-direction: column;
        align-items: center;
        flex-wrap: wrap;

        a {
          width: 128px;
          height: 128px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        i {
          font-size: 32px;
        }

        p {
          text-align: center;
          font-size: 16px;
          //flex: 70%;
        }
      }
    }
  }
</style>
