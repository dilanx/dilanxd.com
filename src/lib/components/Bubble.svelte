<script lang="ts">
  import BubbleConditionalLink from './_bubble/BubbleConditionalLink.svelte';

  export let to: string | undefined = undefined;
  export let newTab = false;
  export let title: string;
  export let description: string | undefined = undefined;
  export let role: string | undefined = undefined;

  export let backgroundColor: string | undefined = undefined;
  export let backgroundImage: string | undefined = undefined;
  let defaultColor =
    !backgroundColor && !backgroundImage ? '#fafafa' : undefined;

  export let dark = false;
</script>

<BubbleConditionalLink {to} {newTab}>
  <div
    class="content"
    class:dark
    class:no-link={to === undefined}
    style:background-color={backgroundColor || defaultColor}
    style:background-image={backgroundImage}
    style:cursor={to ? 'pointer' : 'not-allowed'}
  >
    {#if role}
      <p class="role">{role}</p>
    {/if}
    <p class="title">{title}</p>
    {#if description}
      <p class="desc">{description}</p>
    {/if}
  </div>
</BubbleConditionalLink>

<style lang="scss">
  @use '../theme';

  div {
    height: 132px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    color: theme.$text-primary;
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

    &:hover {
      border-color: theme.$link-primary;
      &.no-link {
        border-color: #808080;
      }
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
  }
</style>
