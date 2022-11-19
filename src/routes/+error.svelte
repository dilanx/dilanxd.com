<script lang="ts">
  import Heading from '$lib/components/Heading.svelte';
  import IconLandingBlock from '$lib/components/IconLandingBlock.svelte';
</script>

<svelte:head>
  <title>Page Not Found - Dilan Nair</title>
</svelte:head>

<Heading h1 hidden>404 Not Found</Heading>

<IconLandingBlock
  icon="fas fa-face-flushed"
  title="There's nothing here."
  subtitle="This page does NOT exist."
  buttons={[
    {
      to: '/',
      text: 'Home',
      icon: 'fas fa-home',
    },
  ]}
/>
