<script lang="ts">
  import ContentGroup from '$lib/components/ContentGroup.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import Link from '$lib/components/Link.svelte';
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
    <Text xs nom>
      <ul>
        <li>CRACO - logo</li>
        <li>Paper - logo</li>
        <li>SwitchPresence - logo</li>
      </ul>
    </Text>
  </ContentGroup>
</Section>

<Section ws hs>
  <Heading h2 anchor="general-software-acknowledgements" class="s left">
    General Software Acknowledgements
  </Heading>

  <ContentGroup sm>
    <Heading h3 anchor="paper">Paper</Heading>
    <Text nom>
      <Link to="https://www.paper.nu">paper.nu</Link>
    </Text>
    <Text xs nom>
      <ul>
        <li>
          Thanks to <Link to="https://github.com/Everthings">Andy Xu</Link>, the
          creator of <Link to="https://github.com/Everthings/salad.nu"
            >salad.nu</Link
          >, for permitting the merge of his product with Plan Northwestern (<Link
            to="https://github.com/dilanx/paper.nu/blob/main/CHANGELOG.md#200"
            >Paper v1</Link
          >) into what is now Paper.
        </li>
      </ul>
    </Text>
  </ContentGroup>
</Section>

<Section ws hs>
  <Heading h2 anchor="other-acknowledgements" class="s left">
    Other Acknowledgements
  </Heading>

  <ContentGroup sm>
    <Heading h3 anchor="website">Website</Heading>
    <Text nom>
      <Link to="https://www.dilanxd.com">dilanxd.com</Link>
    </Text>
    <Text xs nom>
      <ul>
        <li>
          Icons provided by <Link to="https://fontawesome.com/"
            >Font Awesome</Link
          >
        </li>
        <li>
          Minecraft background images taken by myself on the <Link
            to="https://www.drehmal.net/">Drehmal: PRIMORDIAL</Link
          >
          Minecraft map using
          <Link to="https://sildurs-shaders.github.io/">Sildur's Shaders</Link>
        </li>
        <li>
          This site is <Link to="https://github.com/dilanx/dilanxd.com"
            >open source</Link
          >
        </li>
      </ul>
    </Text>
  </ContentGroup>

  <ContentGroup sm>
    <Heading h3 anchor="blog">Blog</Heading>
    <Text nom>
      <Link to="https://dilan.blog">dilan.blog</Link>
    </Text>
    <Text xs nom>
      <ul>
        <li>
          This site runs a modified version of <Link to="https://docusaurus.io/"
            >Docusaurus</Link
          > on blog-only mode using <Link
            to="https://github.com/dilanx/pkg/tree/main/packages/themes"
            >@dilanx/themes</Link
          >
        </li>
        <li>
          This site is <Link to="https://github.com/dilanx/dilan.blog"
            >open source</Link
          >
        </li>
      </ul>
    </Text>
  </ContentGroup>

  <ContentGroup sm>
    <Heading h3 anchor="help-center">Help Center</Heading>
    <Text nom>
      <Link to="https://support.dilanxd.com">support.dilanxd.com</Link>
    </Text>
    <Text xs nom>
      <ul>
        <li>
          This site runs a modified version of <Link to="https://docusaurus.io/"
            >Docusaurus</Link
          > using <Link
            to="https://github.com/dilanx/pkg/tree/main/packages/themes"
            >@dilanx/themes</Link
          >
        </li>
        <li>
          This site is <Link to="https://github.com/dilanx/support.dilanxd.com"
            >open source</Link
          >
        </li>
      </ul>
    </Text>
  </ContentGroup>
</Section>

<Space lg icon="fas fa-face-flushed" text="Uh what?" />
