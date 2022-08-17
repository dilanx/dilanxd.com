<script lang="ts">
  import type { SocialIconLink } from '$lib/common';

  export let h3 = false;
  export let socials: SocialIconLink[] | undefined = undefined;
</script>

<div class="container">
  {#if h3}
    <h3><slot /></h3>
  {/if}
  {#if socials}
    <div class="socials">
      {#each socials as { icon, url }}
        <a href={url}>
          <i class={icon} />
        </a>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  @use '../theme';

  .container {
    display: block;
    text-align: center;

    h3 {
      font-size: 28px;
      font-weight: 500;
      margin: 0;
    }

    .socials {
      font-size: 24px;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      gap: 8px;

      a {
        text-decoration: none;
        margin: 0;
        padding: 0;
        color: theme.$link-primary;
        opacity: 0.5;
        transition: opacity 150ms;

        &:hover {
          opacity: 1;
        }

        i {
          margin: 0;
          padding: 0;
        }
      }
    }
  }

  @include theme.lg {
    .container {
      display: flex;
      flex-direction: row;
      text-align: left;
      align-items: center;
      gap: 20px;
    }
  }
</style>
