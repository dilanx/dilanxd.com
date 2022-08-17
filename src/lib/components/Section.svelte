<script lang="ts">
  import type { SectionLabel } from '$lib/common';

  export let ws = false;
  export let wm = false;
  export let hs = false;
  export let hm = false;

  export let label: SectionLabel | undefined = undefined;
</script>

<section class:ws class:wm class:hs class:hm>
  <div class="content">
    {#if label}
      <div class="label">
        <h2>{label.title}</h2>
        {#if label.subtitle}
          <p>{label.subtitle}</p>
        {/if}
      </div>
    {/if}
    <slot />
  </div>
</section>

<style lang="scss">
  @use '../theme';

  section {
    display: block;
    padding: 0 24px;

    @each $name, $width in theme.$widths {
      &.w#{$name} .content {
        max-width: $width;
        margin-left: auto;
        margin-right: auto;
      }
    }

    @each $name, $height in theme.$heights {
      &.h#{$name} {
        padding-top: $height;
        padding-bottom: $height;
      }
    }
  }

  .content {
    padding: 0;
  }

  .label {
    margin: 0;
    padding: 20px 0;
    text-align: center;
    color: theme.$text-primary;

    h2,
    p {
      margin: 0;
      line-height: 150%;
    }

    h2 {
      font-size: 24px;
      font-weight: bold;
    }
    p {
      font-size: 14px;
    }
  }

  @include theme.lg {
    .label {
      text-align: left;
    }
  }
</style>
