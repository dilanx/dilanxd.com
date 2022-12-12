<script lang="ts">
  import Column from '$lib/components/Column.svelte';
  import Columns from '$lib/components/Columns.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import KnowledgeFocus from '$lib/components/KnowledgeFocus.svelte';
  import KnowledgeList from '$lib/components/KnowledgeList.svelte';
  import LinkButtons from '$lib/components/LinkButtons.svelte';
  import Meta from '$lib/components/Meta.svelte';
  import Section from '$lib/components/Section.svelte';
  import Text from '$lib/components/Text.svelte';
  import { onMount } from 'svelte';

  export let data: KB.Outline;

  const kb = data.kb;

  let focus: O<string> = undefined;
  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    focus = params.get('f')?.replaceAll('-', ' ') || undefined;
  });

  let focusedKb: O<KB.Category> = undefined;

  $: {
    if (focus) {
      focusedKb = kb.find(
        (c) => c.category.toLowerCase() === focus?.toLowerCase()
      );
    } else {
      focusedKb = undefined;
    }
  }

  const toLink = (a: KB.Article) => ({
    text: a.title,
    to: `/kb/${a.id}`,
  });
</script>

<Meta
  title="Knowledge Base"
  description="Find answers to commonly asked questions here."
/>

<Heading h1>Find answers here.</Heading>

<Section wm hm>
  <KnowledgeFocus
    categories={kb}
    focus={focusedKb?.category}
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

<Section ws hs>
  <Text md center nom>Can't find what you're looking for?</Text>
  <LinkButtons
    links={[
      {
        to: '/contact',
        text: 'Get in touch',
        icon: 'fas fa-envelope',
      },
    ]}
  />
</Section>
