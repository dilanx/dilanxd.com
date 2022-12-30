<script lang="ts">
  import ToggleBox from '$lib/components/ToggleBox.svelte';
  import Lights from './subcomponents/Lights.svelte';
  import Snow from './subcomponents/Snow.svelte';

  let snow = true;
</script>

<Lights />
<Snow enabled={snow} />

<ToggleBox inHeading id="snow" label="SNOW EFFECT" bind:checked={snow} />
