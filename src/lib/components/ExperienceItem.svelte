<script lang="ts">
  export let type: 'work' | 'education' | 'organization';
  export let time: string;
  export let title: string;
  export let subtitle: string;
  export let img: string;

  export let prev = false;
  export let next = false;

  let color: string;
  let label: string | undefined = undefined;
  switch (type) {
    case 'work':
      color = '#f59e0b';
      if (!prev) label = 'WORK';
      break;
    case 'organization':
      color = '#14b8a6';
      if (!prev) label = 'ORGANIZATIONS';
      break;
    case 'education':
      color = '#8b5cf6';
      if (!prev) label = 'EDUCATION';
      break;
  }
</script>

<div class="container">
  <div class="content">
    <img src={img} alt={`${title} image`} />
    <div class="text">
      <p class="time">{time}</p>
      <p class="title">{title}</p>
      <p class="subtitle">{subtitle}</p>
      <p class="description">
        <slot />
      </p>
    </div>
  </div>
  <div class="lines">
    {#if prev}
      <div class="line prev" style:background-color={color} />
    {/if}
    <div class="point" style:background-color={color} />
    {#if next}
      <div class="line next" style:background-color={color} />
    {/if}
    {#if label}
      <p class="label" style:color>{label}</p>
    {/if}
  </div>
</div>

<style lang="scss">
  @use '../theme';

  .container {
    display: flex;
    position: relative;
    padding: 0 8px;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;

    img {
      width: 64px;
      height: 64px;
    }

    p {
      margin: 0;
    }

    .time {
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 1px;
    }

    .title {
      margin: 0;
      font-size: 20px;
      font-weight: bold;
    }

    .subtitle {
      font-size: 16px;
    }

    .description {
      font-size: 14px;
      color: #646464;
      margin: 8px 0;
    }

    padding: 20px 0;
  }

  .lines {
    position: relative;
    padding: 0 20px;
    margin-left: 40px;

    .line {
      width: 6px;
      height: 50%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

      &.prev {
        top: 0;
      }

      &.next {
        bottom: 0;
      }
    }

    .point {
      width: 20px;
      height: 20px;
      border-radius: 25%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    p {
      margin: 0;
      position: absolute;
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
      font-weight: 700;
      letter-spacing: 1px;
      display: none;
    }
  }

  :global(a) {
    color: theme.$link-primary;
    text-decoration: none;
    text-underline-offset: 2px;

    &:hover {
      text-decoration: underline;
    }
  }

  :global(ul) {
    padding-left: 20px;
  }

  @include theme.lg {
    .content {
      flex-direction: row;
      align-items: center;

      .title {
        font-size: 24px;
      }

      .subtitle {
        font-size: 18px;
      }
    }

    .lines {
      p {
        display: block;
      }
    }
  }
</style>
