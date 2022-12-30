<script lang="ts">
  import { onMount } from 'svelte';

  export let checked = false;
  export let id: string;
  export let label: string;
  export let inHeading = false;

  onMount(() => {
    if (inHeading) {
      const headingBlock = document.getElementById('heading-block');
      if (headingBlock) {
        const toggleBox = document.getElementById(id);
        if (toggleBox) {
          toggleBox.style.position = 'absolute';
          toggleBox.style.left = '50%';
          toggleBox.style.transform = 'translateX(-50%)';
          toggleBox.style.top = headingBlock.offsetHeight - 50 + 'px';
        }
      }
    }
  });
</script>

<div {id}>
  <input type="checkbox" id={`c-${id}`} bind:checked />
  <label for={`c-${id}`}>
    <p>{label}</p>
  </label>
</div>

<style lang="scss">
  @use '../theme';
  div {
    display: flex;
    justify-content: center;
    padding: 32px;
    color: white;
    opacity: 50%;
  }
  p {
    margin: 0;
    font-weight: bold;
    font-size: 14px;
    padding: 0 8px;
  }
</style>
