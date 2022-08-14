<script lang="ts">
  import Display from '$lib/components/Display/Display.svelte';
  import DisplayDescription from '$lib/components/Display/DisplayDescription.svelte';
  import DisplayImage from '$lib/components/Display/DisplayImage.svelte';
  import DisplayLabel from '$lib/components/Display/DisplayLabel.svelte';
  import DisplayLink from '$lib/components/Display/DisplayLink.svelte';
  import DisplayTitle from '$lib/components/Display/DisplayTitle.svelte';

  import Heading from '../lib/components/Heading/Heading.svelte';
  import Navigation from '../lib/components/Navigation/Navigation.svelte';
</script>

<Navigation />

<Heading title="Hey there, I'm Dilan." />

<Display backgroundColor="#0a3a2a" linkColor="#92ddc8" dark featured>
  <DisplayImage src="/images/craco.png" alt="CRACO logo" slot="image" />
  <svelte:fragment slot="text">
    <DisplayTitle>CRACO</DisplayTitle>
    <DisplayDescription>
      <span class="h">C</span>reate
      <span class="h">R</span>eact
      <span class="h">A</span>pp
      <span class="h">C</span>onfiguration
      <span class="h">O</span>verride, an easy and comprehensible configuration
      layer for Create React App.
    </DisplayDescription>
  </svelte:fragment>
  <svelte:fragment slot="links">
    <DisplayLink
      to="https://github.com/dilanx/craco"
      newTab
      icon="fab fa-github">View on GitHub</DisplayLink
    >
    <DisplayLink
      to="https://npmjs.com/package/@craco/craco"
      newTab
      icon="fab fa-npm">View on npm</DisplayLink
    >
  </svelte:fragment>
  <svelte:fragment slot="labels">
    <DisplayLabel
      to="https://npmjs.com/package/@craco/craco"
      image="https://img.shields.io/npm/v/@craco/craco.svg"
      alt="CRACO npm version"
    />
    <DisplayLabel
      to="https://npmjs.com/package/@craco/craco"
      image="https://img.shields.io/npm/dm/@craco/craco.svg"
      alt="CRACO npm downloads"
    />
    <DisplayLabel
      to="https://github.com/dilanx/craco"
      image="https://img.shields.io/github/stars/dilanx/craco?color=red"
      alt="CRACO GitHub stars"
    />
  </svelte:fragment>
</Display>

<Display backgroundColor="#262626" linkColor="#d8b4fe" dark featured>
  <DisplayImage
    src="/images/calendar-solid.png"
    alt="Plan Northwestern logo"
    slot="image"
  />
  <svelte:fragment slot="text">
    <DisplayTitle>Plan Northwestern</DisplayTitle>
    <DisplayDescription>
      An online tool used by thousands of Northwestern students to plan their
      school years.
    </DisplayDescription>
  </svelte:fragment>
  <svelte:fragment slot="links">
    <DisplayLink to="https://plan-nu.com" newTab icon="fas fa-external-link-alt"
      >Use Plan NU</DisplayLink
    >
    <DisplayLink
      to="https://github.com/dilanx/plan-northwestern"
      newTab
      icon="fab fa-github">View on GitHub</DisplayLink
    >
  </svelte:fragment>
  <svelte:fragment slot="sublinks">
    <DisplayLink
      to="https://www.mccormick.northwestern.edu/news/articles/2022/02/undergraduate-launches-course-planning-web-application/"
      newTab
      icon="fas fa-newspaper"
      sublink
      >Read the official article by Northwestern Engineering!</DisplayLink
    >
    <DisplayLink
      to="https://github.com/dilanx/plan-northwestern/blob/main/SALAD.md"
      newTab
      icon="fas fa-object-group"
      sublink
      >salad.nu is joining forces with Plan Northwestern this fall</DisplayLink
    >
  </svelte:fragment>
  <svelte:fragment slot="labels">
    <DisplayLabel
      to="https://www.mccormick.northwestern.edu/computer-science/"
      image="https://img.shields.io/badge/sponsored-Northwestern%20Department%20of%20CS-blueviolet"
      alt="Project sponsored by the Northwestern University Department of Computer Science"
    />
    <DisplayLabel
      to="https://github.com/dilanx/plan-northwestern"
      image="https://img.shields.io/github/stars/dilanx/plan-northwestern?color=red"
      alt="Plan Northwestern GitHub stars"
    />
  </svelte:fragment>
</Display>

<Display
  backgroundImage="
    linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url('/images/mcshaders1.jpg')
  "
  linkColor="#ffff8f"
  dark
  featured
>
  <DisplayImage
    src="/images/dmslauncher.png"
    alt="DMSLauncher screenshot"
    slot="image"
  />
  <svelte:fragment slot="text">
    <DisplayTitle>DMSLauncher</DisplayTitle>
    <DisplayDescription>
      An automatic modded client updater and launcher for Minecraft.
    </DisplayDescription>
  </svelte:fragment>
  <svelte:fragment slot="links">
    <DisplayLink
      to="https://github.com/dilanx/dmslauncher"
      newTab
      icon="fab fa-github">View on GitHub</DisplayLink
    >
  </svelte:fragment>
</Display>

<Display
  backgroundImage="
    linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url('/images/discord.png')
  "
  linkColor="#b8beff"
  dark
  featured
>
  <DisplayImage
    src="/images/switchpresence.png"
    alt="SwitchPresence logo"
    slot="image"
  />
  <svelte:fragment slot="text">
    <DisplayTitle>SwitchPresence</DisplayTitle>
    <DisplayDescription>
      A cross-platform desktop application that allows you to display Nintendo
      Switch games as your current activity on Discord.
    </DisplayDescription>
  </svelte:fragment>
  <svelte:fragment slot="links">
    <DisplayLink
      to="https://github.com/dilanx/switchpresence"
      newTab
      icon="fab fa-github">View on GitHub</DisplayLink
    >
  </svelte:fragment>
</Display>
