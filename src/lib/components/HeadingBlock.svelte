<script lang="ts">
  export let title: O<string> = undefined;
  export let subtitle: O<string> = undefined;
  export let lessPadding = false;
  export let dark = false;
</script>

<div class="heading-block" class:lessPadding class:dark>
  <div class="content">
    {#if title}
      <h1>{title}</h1>
    {/if}
    {#if subtitle}
      <p>{subtitle}</p>
    {/if}
    <slot />
  </div>
</div>

<style lang="scss">
  @use '../theme';

  .heading-block {
    padding: 100px 20px;
    color: theme.$text-primary;

    &.lessPadding {
      padding: 50px 20px;
    }

    &.dark {
      color: theme.$text-primary-dark;
    }

    .content {
      margin: 0 auto;
      max-width: 1200px;
    }

    h1 {
      font-size: 56px;
      font-weight: bold;
      text-align: center;
      margin: 20px 0;
    }

    p {
      font-size: 24px;
      font-weight: normal;
      text-align: center;
      margin: 10px 0;
    }
  }

  @include theme.lg {
    .heading-block {
      padding: 125px 20px;

      &.lessPadding {
        padding: 50px 20px;
      }

      h1 {
        font-size: 64px;
      }
    }
  }
</style>
