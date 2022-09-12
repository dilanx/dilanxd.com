<script lang="ts">
  export let images: (
    | string
    | {
        icon: string;
        color?: string;
      }
    | {
        src: string;
        alt: string;
        padding?: string;
        color?: string;
        backgroundColor?: string;
        rounded?: boolean;
      }
  )[];
</script>

<div class="container">
  <div class="icons">
    {#each images as image}
      {#if typeof image === 'string'}
        <i class={image} />
      {:else if 'icon' in image}
        <i class={image.icon} style:color={image.color} />
      {:else}
        <div
          class="image"
          style:background-color={image.backgroundColor}
          style:padding={image.padding}
          style:border-radius={image.rounded ? '16px' : undefined}
        >
          <img src={image.src} alt={image.alt} />
        </div>
      {/if}
    {/each}
  </div>
  <p><slot /></p>
</div>

<style lang="scss">
  @use '../theme';

  div.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  div.icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }

  p {
    margin: 0;
    font-size: 32px;
    text-align: center;
  }

  i {
    font-size: 48px;
  }

  div.image {
    box-sizing: border-box;
    height: 72px;

    img {
      height: 100%;
    }
  }

  @include theme.lg {
    p {
      font-size: 40px;
    }

    i {
      font-size: 64px;
    }

    div.image {
      height: 96px;
    }
  }
</style>
