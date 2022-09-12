<script lang="ts">
  import type { SocialIconLink } from '$lib/common';
  import HeadingAnchor from './_heading/HeadingAnchor.svelte';
  import HeadingSocials from './_heading/HeadingSocials.svelte';
  import HeadingText from './_heading/HeadingText.svelte';

  export let h1 = false;
  export let h2 = false;
  export let h3 = false;
  export let hidden = false;
  export let large = false;
  export let anchor: string | undefined = undefined;
  let className: string | undefined = undefined;
  export { className as class };
  export let socials: SocialIconLink[] | undefined = undefined;
</script>

{#if socials}
  <div class="container" class:large>
    <HeadingText {h1} {h2} {h3} {hidden} {large} {anchor} {className}>
      <slot />
    </HeadingText>
    {#if socials}
      <HeadingSocials {large} {socials} />
    {/if}
  </div>
{:else}
  <HeadingText {h1} {h2} {h3} {hidden} {large} {anchor} {className}>
    <slot />
  </HeadingText>
{/if}

<style lang="scss">
  @use '../theme';

  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    &.large {
      display: block;
    }
  }

  @include theme.lg {
    .container,
    .container.large {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;
    }
  }
</style>
