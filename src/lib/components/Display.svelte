<script lang="ts">
  import type { DisplayLabel, DisplayLink } from '$lib/common';

  export let backgroundColor: string | undefined = undefined;
  export let borderColor: string | undefined = undefined;
  export let backgroundImage: string | undefined = undefined;
  export let darkenBackgroundImage = false;

  export let dark = false;

  export let links: DisplayLink[] | undefined = undefined;
  export let linkColor: string | undefined = undefined;
  export let sublinkColor: string | undefined = undefined;

  export let labels: DisplayLabel[] | undefined = undefined;

  export let featured = false;

  export let tag: string | undefined = undefined;
  export let mini = false;
  export let icon: string | undefined = undefined;

  if (featured) {
    tag = 'FEATURED PROJECT';
  }

  let regularLinks: DisplayLink[] = [];
  let sublinks: DisplayLink[] = [];

  if (links) {
    for (const link of links) {
      if (link.sublink) {
        sublinks.push(link);
      } else {
        regularLinks.push(link);
      }
    }
  }

  const imageOverlayOpacity = darkenBackgroundImage ? 0.75 : 0.2;
</script>

<div
  class="display"
  style:background-image={`linear-gradient(rgba(0, 0, 0, ${imageOverlayOpacity}), rgba(0, 0, 0, ${imageOverlayOpacity})), url(${backgroundImage})`}
  style:background-color={backgroundColor}
  style:border={borderColor ? `4px solid ${borderColor}` : undefined}
>
  <div class="content">
    {#if $$slots.image && !icon}
      <div class="image">
        <slot name="image" />
      </div>
    {/if}
    {#if icon}
      <div class="icon" class:dark>
        <i class={icon} />
      </div>
    {/if}
    <div
      class="text"
      class:dark
      class:noImage={!$$slots.image && !icon}
      class:mini
    >
      <slot />
      {#if regularLinks.length !== 0}
        <div class="links" style:color={linkColor}>
          {#each regularLinks as { to, newTab, icon, text }}
            <a
              class:dark
              href={to}
              target={newTab ? '_blank' : ''}
              rel={newTab ? 'noreferrer' : undefined}
            >
              {#if icon}
                <i class={icon} />
              {/if}
              {text}
            </a>
          {/each}
        </div>
      {/if}
      {#if sublinks.length !== 0}
        <div class="sublinks" style:color={sublinkColor}>
          {#each sublinks as { to, newTab, icon, text }}
            <a
              href={to}
              target={newTab ? '_blank' : undefined}
              rel={newTab ? 'noreferrer' : undefined}
              class="sublink"
            >
              {#if icon}
                <i class={icon} />
              {/if}
              {text}
            </a>
          {/each}
        </div>
      {/if}
    </div>
  </div>
  {#if labels}
    <div class="labels">
      {#each labels as { to, image, alt }}
        <a href={to} target="_blank" rel="noreferrer">
          <img src={image} {alt} />
        </a>
      {/each}
    </div>
  {/if}
  {#if tag}
    <p class="tag" class:dark>{tag}</p>
  {/if}
</div>

<style lang="scss">
  @use '../theme';

  .display {
    height: 600px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 20px 10px;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    overflow: hidden;

    .image {
      height: 256px;

      :global(img) {
        width: auto;
        height: 256px;
        display: block;
        margin: 0 auto;
      }
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;

      color: theme.$text-primary;
      &.dark {
        color: theme.$text-primary-dark;
      }

      :global(i) {
        font-size: 128px;
      }
    }

    .text {
      margin: 20px 0;
      text-align: center;
      color: theme.$text-primary;
      &.dark {
        color: theme.$text-primary-dark;
      }
      &.noImage {
        margin: 20px 20px;
      }

      :global(h2) {
        font-size: 28px;
        font-weight: 500;
        margin: 0;
      }

      :global(p) {
        font-size: 18px;
        margin: 0;
      }

      &.mini {
        :global(h2) {
          font-size: 24px;
        }

        :global(p) {
          font-size: 16px;
        }
      }

      .links {
        margin: 10px 0;
        font-size: 20px;
        text-align: center;
      }

      .sublinks {
        margin: 0;
        font-size: 16px;
      }

      a {
        color: inherit;
        text-decoration: none;
        display: inline-block;

        i {
          margin-right: 5px;
        }

        &:not(.sublink) {
          margin: 0 4px;
          padding: 4px 8px;
          border-radius: 8px;
          transition: all 150ms;
          &:hover {
            background-color: rgba(140, 142, 144, 0.16);

            &.dark {
              background-color: rgba(240, 242, 244, 0.16);
            }
          }

          &:active {
            background-color: rgba(140, 142, 144, 0.3);
            &.dark {
              background-color: rgba(240, 242, 244, 0.3);
            }
          }
        }

        &.sublink {
          color: theme.$display-sublink;
          transition: color 150ms;
          margin: 0 8px;
          display: block;
          &:hover {
            color: inherit;
          }
        }
      }
    }

    .labels {
      position: absolute;
      right: 15px;
      top: 15px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .tag {
      position: absolute;
      right: 10px;
      bottom: 5px;
      font-weight: bold;
      font-size: 14px;
      margin: 0;
      color: theme.$text-primary;

      &.dark {
        color: theme.$text-primary-dark;
        opacity: 0.75;
      }
    }
  }

  @include theme.lg {
    .display {
      height: 320px;

      .content {
        display: flex;
        width: 100%;
        align-items: center;
      }

      .image,
      .icon {
        flex: 40%;
      }

      .text {
        flex: 60%;
        text-align: left;

        :global(h2) {
          font-size: 48px;
          font-weight: bold;
        }

        &.mini {
          :global(h2) {
            font-size: 32px;
          }

          :global(p) {
            font-size: 16px;
          }
        }

        .links {
          text-align: left;
        }
      }

      .tag {
        font-size: 18px;
        right: 20px;
        bottom: 10px;
      }
    }
  }
</style>
