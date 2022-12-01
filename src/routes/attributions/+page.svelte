<script lang="ts">
  import ContentGroup from '$lib/components/ContentGroup.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import Meta from '$lib/components/Meta.svelte';
  import Section from '$lib/components/Section.svelte';
  import Space from '$lib/components/Space.svelte';
  import Text from '$lib/components/Text.svelte';
  import { socials } from '$lib/socials';
</script>

<Meta title="Attributions" />
<Heading h1>Attributions</Heading>

<Section ws hs>
  <Heading h2 anchor="contributors" class="s left">Contributors</Heading>

  <ContentGroup sm>
    <Heading h3 socials={socials.defne}>Defne Deda</Heading>
    <Text xs noPadding>
      <ul>
        <li>CRACO (logo)</li>
        <li>SwitchPresence (logo)</li>
      </ul>
    </Text>
  </ContentGroup>
</Section>

<Section ws hs>
  <Heading h2 anchor="other-acknowledgements" class="s left"
    >Other Acknowledgements</Heading
  >

  <ContentGroup>
    <Heading h3>Website</Heading>
    <Text xs noPadding>
      <ul>
        <li>
          Minecraft background images taken by myself on the <a
            href="https://www.drehmal.net/">Drehmal: PRIMORDIAL</a
          >
          Minecraft map using
          <a href="https://sildurs-shaders.github.io/">Sildur's Shaders</a>
        </li>
        <li>
          Icons provided by <a href="https://fontawesome.com/">Font Awesome</a>
        </li>
        <li>
          This site is <a href="https://github.com/dilanx/dilanxd.com"
            >open source</a
          >
        </li>
      </ul>
    </Text>
  </ContentGroup>
</Section>

<Space lg icon="fas fa-face-flushed" text="Uh what?" />
