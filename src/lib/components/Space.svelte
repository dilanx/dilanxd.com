<script lang="ts">
  export let lg = false;
  export let icon: string | undefined = undefined;
  export let text: string | undefined = undefined;
</script>

<div class:lg>
  {#if icon}
    <i class={icon} />
  {/if}
  {#if text}
    <p>{text}</p>
  {/if}
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.lg {
      height: 800px;
    }
  }

  p,
  i {
    color: gray;
    opacity: 0.1;
    margin: 0;
  }

  p {
    font-size: 48px;
  }

  i {
    font-size: 148px;
  }
</style>
