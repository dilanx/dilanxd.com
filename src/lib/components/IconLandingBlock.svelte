<script lang="ts">
  import LinkButtons from './LinkButtons.svelte';

  export let icon: string;
  export let title: string;
  export let subtitle: O<string> = undefined;
  export let buttons: O<LinkData[]> = undefined;
  export let buttonsHighlighted = false;
  export let dark = false;
</script>

<div class:dark>
  <i class={icon} />
  <p class="title">{title}</p>
  {#if subtitle}
    <p class="subtitle">{subtitle}</p>
  {/if}
  {#if buttons}
    <LinkButtons links={buttons} highlight={buttonsHighlighted} />
  {/if}
</div>

<style lang="scss">
  @use '../theme';

  div {
    color: theme.$text-primary;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 320px;
    padding: 20px;

    &.dark {
      color: theme.$text-primary-dark;
    }

    .content {
      margin: 0 auto;
      max-width: 1200px;
    }

    p {
      margin: 0;
      text-align: center;

      &.title {
        font-size: 32px;
      }

      &.subtitle {
        font-size: 18px;
        font-weight: 300;
      }
    }

    i {
      font-size: 148px;
      margin: 0;
      margin-bottom: 40px;
    }
  }

  @include theme.lg {
    div p {
      &.title {
        font-size: 48px;
      }
      &.subtitle {
        font-size: 24px;
      }
    }
  }
</style>
