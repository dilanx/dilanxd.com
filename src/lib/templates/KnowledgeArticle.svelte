<script lang="ts">
  import Heading from '$lib/components/Heading.svelte';
  import Meta from '$lib/components/Meta.svelte';
  import Section from '$lib/components/Section.svelte';

  export let title: string;
</script>

<Meta title={`${title} - KB`} />
<Heading h1 topic="KNOWLEDGE BASE">{title}</Heading>

<Section ws hm>
  <slot />
</Section>
