<script lang="ts">
  import Lights from './Lights.svelte';
  import Snow from './Snow.svelte';

  let snow = true;
</script>

<Lights />
<Snow enabled={snow} />

<div>
  <input type="checkbox" id="snow" bind:checked={snow} />
  <label for="snow">
    <p>SNOW EFFECT</p>
  </label>
</div>

<style lang="scss">
  div {
    display: flex;
    justify-content: center;
    padding: 32px;
    color: white;
  }
  p {
    margin: 0;
    font-weight: bold;
    font-size: 14px;
    padding: 0 8px;
  }
</style>
