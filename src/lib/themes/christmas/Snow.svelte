<script lang="ts">
  import { onMount } from 'svelte';
  import type { Engine } from 'tsparticles-engine';
  import { loadSnowPreset } from 'tsparticles-preset-snow';

  export let enabled = true;

  let ParticlesComponent: any;

  onMount(async () => {
    const module = await import('svelte-particles');
    ParticlesComponent = module.default;
  });

  let particlesOptions = {
    preset: 'snow',
    background: {
      opacity: 0,
    },
    particles: {
      move: {
        enable: true,
      },
      zIndex: 200,
    },
  };

  let particlesInit = async (engine: Engine) => {
    await loadSnowPreset(engine);
  };
</script>

{#if enabled}
  <svelte:component
    this={ParticlesComponent}
    id="tsparticles"
    options={particlesOptions}
    {particlesInit}
  />
{/if}
