<script lang="ts">
  import { onMount } from 'svelte';

  import NavDesktopLinks from './NavDesktopLinks.svelte';
  import NavMobileBurger from './NavMobileBurger.svelte';
  import NavMobileLinks from './NavMobileLinks.svelte';
  import NavTitle from './NavTitle.svelte';

  let body: HTMLElement | undefined = undefined;

  let big = true;
  let open = false;

  function update() {
    big =
      document.body.scrollTop > 80 || document.documentElement.scrollTop < 80;
  }

  $: {
    if (body) {
      if (open) {
        document.body.style.overflow = 'hidden';
        update();
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }

  onMount(() => {
    body = document.body;
    window.onscroll = () => update();
    window.onresize = () => (open = false);
    update();
  });
</script>

<div class="main" class:big>
  <NavTitle {big} />

  <NavDesktopLinks {big} />
  <NavMobileBurger
    {big}
    {open}
    on:click={() => {
      open = !open;
    }}
  />
</div>
<div class="overlay" class:open>
  <NavMobileLinks {big} />
</div>

<style lang="scss">
  @use '../../theme';

  .main {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 99;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: 0.4s;
    display: flex;
    align-items: center;

    background-color: theme.$nav-bg;
    height: theme.$nav-h;

    &.big {
      background-color: theme.$nav-bg-big;
      height: theme.$nav-h-big;
    }
  }

  .overlay {
    height: 0%;
    width: 100%;
    position: fixed;
    margin: 0;
    z-index: 100;
    top: theme.$nav-h-big;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000000e6;
    overflow-y: hidden;
    transition: height 0.5s;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    &.open {
      height: 100%;
    }
  }

  @include theme.lg {
    .overlay {
      display: none;
    }
  }
</style>
