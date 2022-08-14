<script lang="ts">
  export let backgroundColor: string | undefined = undefined;
  export let backgroundImage: string | undefined = undefined;
  export let dark: boolean | undefined = undefined;
  export let linkColor: string | undefined = undefined;
  export let sublinkColor: string | undefined = undefined;
  export let tag: string | undefined = undefined;
  export let tagDark: boolean | undefined = undefined;
</script>

<div
  class="display-block"
  style:background-image={backgroundImage}
  style:background-color={backgroundColor}
>
  <div class="content">
    <div class="image">
      <slot name="image" />
    </div>
    <div class="text" class:dark>
      <slot name="text" />
      {#if $$slots.links}
        <div class="links" style:color={linkColor}>
          <slot name="links" />
        </div>
      {/if}
      {#if $$slots.sublinks}
        <div class="sublinks" style:color={sublinkColor}>
          <slot name="sublinks" />
        </div>
      {/if}
    </div>
  </div>
  {#if $$slots.labels}
    <div class="labels">
      <slot name="labels" />
    </div>
  {/if}
  {#if tag}
    <p class="tag" class:dark={tagDark}>{tag}</p>
  {/if}
</div>

<style lang="scss">
  @use '../../theme';

  .display-block {
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
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    overflow: hidden;

    .image {
      height: 256px;
    }

    .text {
      margin: 20px 0;
      color: theme.$text-primary;
      &.dark {
        color: theme.$text-primary-dark;
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
    }

    .labels {
      position: absolute;
      right: 15px;
      top: 15px;
      display: flex;
      align-items: center;
      gap: 8;
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
        opacity: 0.5;
      }
    }
  }

  @include theme.lg {
    .display-block {
      height: 320px;

      .content {
        display: flex;
        width: 100%;
        align-items: center;
      }

      .image {
        flex: 40%;
      }

      .text {
        flex: 60%;
        text-align: left;

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
