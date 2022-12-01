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
    &.margin {
      margin: 24px;
    }

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #808080;
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
        background-color: #f0f2f4;
        color: black;
        &.highlight {
          color: theme.$link-primary;
        }
      }

      &:active {
        background-color: #e0e2e4;
        color: black;
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
        flex-direction: column;
        align-items: center;
        flex-wrap: nowrap;

        a {
          width: 220px;
        }

        i {
          //text-align: center;
          //flex: 30%;
        }

        p {
          text-align: right;
          flex: 1 0 auto;
          //flex: 70%;
        }
      }
    }
  }
</style>
