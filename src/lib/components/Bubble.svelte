<script lang="ts">
  import type { Badge } from '$lib/common';
  import BubbleBadge from './_bubble/BubbleBadge.svelte';
  import BubbleConditionalLink from './_bubble/BubbleConditionalLink.svelte';

  export let to: string | undefined = undefined;
  export let newTab = false;
  export let title: string;
  export let description: string | undefined = undefined;
  export let role: string | undefined = undefined;

  export let backgroundColor: string | undefined = undefined;
  export let backgroundImage: string | undefined = undefined;
  export let borderColor: string | undefined = undefined;

  export let badges: Badge[] = [];

  export let dark = false;

  export let old = false;
  if (old) {
    badges.push({
      text: 'OLD PROJECT',
      color: '#60a5fab0',
    });
  }

  export let deprecated = false;
  if (deprecated) {
    badges.push({
      text: 'DEPRECATED',
      color: '#fb923cb0',
    });
  }

  export let date = '';
  if (date) {
    badges.push({
      text: date,
      color: '#646464a0',
      size: 'md',
    });
  }
</script>

<BubbleConditionalLink {to} {newTab}>
  <div
    class="content"
    class:dark
    class:no-link={to === undefined}
    class:no-bg={!backgroundColor && !backgroundImage}
    style:background-color={backgroundColor}
    style:background-image={backgroundImage}
    style:border-color={borderColor}
    style:cursor={to ? 'pointer' : 'not-allowed'}
  >
    {#if role}
      <p class="role">{role}</p>
    {/if}
    <p class="title">{title}</p>
    {#if description}
      <p class="desc">{description}</p>
    {/if}
    {#if badges.length > 0}
      <div class="badges">
        {#each badges as badge}
          <BubbleBadge {badge} />
        {/each}
      </div>
    {/if}
  </div>
</BubbleConditionalLink>

<style lang="scss">
  @use '../theme';

  .content {
    position: relative;
    height: 132px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    color: theme.$text-primary-force-light;
    padding: 4px 20px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: border-box;
    border: 4px solid transparent;
    transition: outline 50ms;

    &.dark {
      color: theme.$text-primary-dark;
    }

    &.no-bg {
      color: theme.$text-primary;
      background-color: theme.$bubble-background;
    }

    &:hover {
      border-color: theme.$link-primary !important;
      &.no-link {
        border-color: theme.$link-disabled !important;
      }
    }

    &:active:not(.no-link) {
      border-color: theme.$link-secondary !important;
    }

    .title {
      font-size: 28px;
      font-weight: bold;
      margin: 0;
    }

    .desc {
      font-size: 14px;
      margin: 0;
    }

    .role {
      font-size: 14px;
      font-weight: 800;
      margin: 0;
      opacity: 0.64;
    }

    .badges {
      position: absolute;
      top: 8px;
      right: 8px;
      display: flex;
      gap: 8px;
    }
  }
</style>
