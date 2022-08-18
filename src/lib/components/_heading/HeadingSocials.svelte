<script lang="ts">
  import type { SocialIconLink } from '$lib/common';

  export let large: boolean;
  export let socials: SocialIconLink[];
</script>

<div class:large>
  {#each socials as { icon, url }}
    <a href={url}>
      <i class={icon} />
    </a>
  {/each}
</div>

<style lang="scss">
  @use '../../theme';

  div {
    font-size: 20px;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 8px;

    &.large {
      font-size: 24px;
    }

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
</style>
