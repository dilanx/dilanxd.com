<script lang="ts">
  import Column from '$lib/components/Column.svelte';
  import Columns from '$lib/components/Columns.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import KnowledgeFocus from '$lib/components/KnowledgeFocus.svelte';
  import KnowledgeList from '$lib/components/KnowledgeList.svelte';
  import Section from '$lib/components/Section.svelte';
  import { onMount } from 'svelte';

  export let data: KB.Outline;

  const kb = data.kb;

  let focus: O<string> = undefined;
  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    focus = params.get('f') || undefined;
  });

  let focusedKb: O<KB.Category> = undefined;

  $: {
    if (focus) {
      focusedKb = kb.find((c) => c.category === focus);
    } else {
      focusedKb = undefined;
    }
  }

  const toLink = (a: KB.Article) => ({
    text: a.title,
    to: `/kb/${a.id}`,
  });
</script>

<svelte:head>
  <title>Knowledge Base - Dilan Nair</title>
</svelte:head>

<Heading h1>Find answers here.</Heading>

<Section wm hm>
  <KnowledgeFocus
    categories={kb}
    {focus}
    select={(name) => {
      focus = name;
    }}
  />
  {#if focusedKb}
    <KnowledgeList
      title={focusedKb.category}
      links={focusedKb.articles.map(toLink)}
      focused
    />
  {:else}
    <Columns>
      {#each [1, 2] as current}
        <Column>
          {#each kb as { category, col, articles }}
            {#if col === current}
              <KnowledgeList title={category} links={articles.map(toLink)} />
            {/if}
          {/each}
        </Column>
      {/each}
    </Columns>
  {/if}
</Section>
