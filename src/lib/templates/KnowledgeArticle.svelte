<script lang="ts">
  import Heading from '$lib/components/Heading.svelte';
  import Section from '$lib/components/Section.svelte';

  export let title: string;
</script>

<svelte:head>
  <title>{title} - KB - Dilan Nair</title>
</svelte:head>

<Heading h1 topic="KNOWLEDGE BASE">{title}</Heading>

<Section ws hm>
  <slot />
</Section>
