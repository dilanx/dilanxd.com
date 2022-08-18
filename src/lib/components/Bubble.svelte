<script lang="ts">
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

<a href={to} target={newTab ? '_blank' : undefined}>
  <div
    class:dark
    style:background-color={backgroundColor || defaultColor}
    style:background-image={backgroundImage}
    style:cursor={to ? 'pointer' : 'not-allowed'}
  >
    <p class="title">{title}</p>
    {#if description}
      <p class="desc">{description}</p>
    {/if}
    {#if role}
      <p class="role">{role}</p>
    {/if}
  </div>
</a>

<style lang="scss">
  @use '../theme';

  a {
    text-decoration: none;
    display: block;
    margin: 20px 0;
    padding: 0;
    opacity: 1;
    transition: opacity 150ms;
  }

  div {
    height: 112px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    color: theme.$text-primary;
    padding: 4px 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    outline: 4px solid transparent;
    transition: outline 50ms;

    &.dark {
      color: theme.$text-primary-dark;
    }

    &:hover {
      outline-color: theme.$link-primary;
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
      font-size: 18px;
      font-weight: 800;
      letter-spacing: 4px;
      margin: 0;
      opacity: 0.64;
    }
  }

  @include theme.lg {
    a {
      margin: 0;
    }
  }
</style>
