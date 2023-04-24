<!-- <script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
    const cursor = document.querySelector('#cursor') as any;

    const DEFAULT_CURSOR_SIZE = cursor.style.getPropertyValue('--height');

    let isCursorLocked = false;

    document.addEventListener('mousedown', () => {
      if (!isCursorLocked) {
        cursor.style.setProperty('--scale', 0.9);
      }
    });

    document.addEventListener('mouseup', () => {
      if (!isCursorLocked) {
        cursor.style.setProperty('--scale', 1);
      }
    });

    document.addEventListener('mousemove', ({ x, y }) => {
      if (!isCursorLocked) {
        cursor.style.setProperty('--top', y + 'px');
        cursor.style.setProperty('--left', x + 'px');
      }
    });

    // document.querySelectorAll('a').forEach((a) => {
    //   let rect: any = null;

    //   a.addEventListener(
    //     'mouseenter',
    //     ({ target }: any) => {
    //       isCursorLocked = true;

    //       rect = target.getBoundingClientRect();

    //       cursor.classList.add('is-locked');
    //       cursor.style.setProperty('--top', rect.top + rect.height / 2 + 'px');
    //       cursor.style.setProperty('--left', rect.left + rect.width / 2 + 'px');
    //       cursor.style.setProperty('--width', rect.width + 'px');
    //       cursor.style.setProperty('--height', rect.height + 'px');

    //       target.style.setProperty('--scale', 1.05);
    //     },
    //     { passive: true }
    //   );

    //   a.addEventListener(
    //     'mousemove',
    //     ({ target, ...event }: any) => {
    //       const halfHeight = rect.height / 2;
    //       const topOffset = (event.y - rect.top - halfHeight) / halfHeight;
    //       const halfWidth = rect.width / 2;
    //       const leftOffset = (event.x - rect.left - halfWidth) / halfWidth;

    //       cursor.style.setProperty('--translateX', `${leftOffset * 3}px`);
    //       cursor.style.setProperty('--translateY', `${topOffset * 3}px`);

    //       target.style.setProperty('--translateX', `${leftOffset * 6}px`);
    //       target.style.setProperty('--translateY', `${topOffset * 4}px`);
    //     },
    //     { passive: true }
    //   );

    //   a.addEventListener(
    //     'mouseleave',
    //     ({ target }: any) => {
    //       isCursorLocked = false;

    //       cursor.style.setProperty('--width', DEFAULT_CURSOR_SIZE);
    //       cursor.style.setProperty('--height', DEFAULT_CURSOR_SIZE);
    //       cursor.style.setProperty('--translateX', 0);
    //       cursor.style.setProperty('--translateY', 0);

    //       target.style.setProperty('--translateX', 0);
    //       target.style.setProperty('--translateY', 0);
    //       target.style.setProperty('--scale', 1);

    //       setTimeout(() => {
    //         if (!isCursorLocked) {
    //           cursor.classList.remove('is-locked');
    //         }
    //       }, 100);
    //     },
    //     { passive: true }
    //   );
    // });

    document.querySelectorAll('p').forEach((p) => {
      p.addEventListener(
        'mouseover',
        () => {
          cursor.style.setProperty('--width', '0.2em');
          cursor.style.setProperty('--height', '1.5em');
        },
        { passive: true }
      );

      p.addEventListener(
        'mouseout',
        () => {
          cursor.style.setProperty('--width', DEFAULT_CURSOR_SIZE);
          cursor.style.setProperty('--height', DEFAULT_CURSOR_SIZE);
        },
        { passive: true }
      );
    });
  });
</script>

<div id="cursor">
  <div class="cursor-content" />
</div>

<style lang="scss">
  @use '../theme';

  :global {
    body {
      cursor: none;
    }

    a {
      cursor: none;
    }
  }

  #cursor {
    height: var(--height);
    left: var(--left);
    pointer-events: none;
    top: var(--top);
    transform: translate(-50%, -50%) scale(var(--scale));
    transition-property: width, height;
    width: var(--width);
    z-index: 99;

    --top: -1em;
    --left: -1em;
    --width: 1em;
    --height: 1em;
    --scale: 1;
    --translateX: 0;
    --translateY: 0;
  }

  #cursor.is-locked {
    transition-property: width, height, left, top;
  }

  #cursor.is-locked .cursor-content {
    opacity: 0.06;
  }

  #cursor,
  .cursor-content {
    position: fixed;
    transition-duration: 0.1s;
    transition-timing-function: ease-out;
  }

  .cursor-content {
    background-color: #34d399;
    //border: 1px solid white;
    border-radius: 0.6em;
    bottom: 0;
    left: 0;
    opacity: 0.75;
    right: 0;
    top: 0;
    transform: translate(var(--translateX), var(--translateY));
    transition-property: opacity;
  }
</style> -->
