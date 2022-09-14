<script lang="ts">
  import ContinueLink from '$lib/components/ContinueLinks.svelte';
  import Display from '$lib/components/Display.svelte';
  import Section from '$lib/components/Section.svelte';
  import ContentCard from '$lib/components/ContentCard.svelte';
  import { ext, gh } from '$lib/common';
  import HeadingBlock from '../lib/components/HeadingBlock.svelte';
  import Navigation from '../lib/components/Navigation.svelte';
  import { socials } from '$lib/socials';
  import Footer from '$lib/components/Footer.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import Text from '$lib/components/Text.svelte';
</script>

<svelte:head>
  <title>Dilan Nair</title>
</svelte:head>

<Navigation />

<HeadingBlock title="Hey there, I'm Dilan." />

<Display
  backgroundColor="#0a3a2a"
  links={[
    gh('dilanx/craco'),
    {
      to: 'https://www.npmjs.com/package/@craco/craco',
      newTab: true,
      icon: 'fab fa-npm',
      text: 'View on npm',
    },
  ]}
  linkColor="#92ddc8"
  labels={[
    {
      to: 'https://npmjs.com/package/@craco/craco',
      image: 'https://img.shields.io/npm/v/@craco/craco.svg',
      alt: 'CRACO npm version',
    },
    {
      to: 'https://npmjs.com/package/@craco/craco',
      image: 'https://img.shields.io/npm/dm/@craco/craco.svg',
      alt: 'CRACO npm downloads',
    },
    {
      to: 'https://github.com/dilanx/craco',
      image: 'https://img.shields.io/github/stars/dilanx/craco?color=red',
      alt: 'CRACO GitHub stars',
    },
  ]}
  dark
  featured
>
  <img src="/images/craco.png" alt="CRACO logo" slot="image" />
  <h2>CRACO</h2>
  <p>
    <span class="s heavy">C</span>reate
    <span class="s heavy">R</span>eact
    <span class="s heavy">A</span>pp
    <span class="s heavy">C</span>onfiguration
    <span class="s heavy">O</span>verride, an easy and comprehensible
    configuration layer for Create React App.
  </p>
</Display>

<Display
  backgroundColor="#262626"
  links={[
    ext('Use Plan NU', 'https://plan-nu.com'),
    gh('dilanx/plan-northwestern'),
    {
      to: 'https://www.mccormick.northwestern.edu/news/articles/2022/02/undergraduate-launches-course-planning-web-application/',
      newTab: true,
      icon: 'fas fa-newspaper',
      sublink: true,
      text: 'Read the official article by Northwestern Engineering!',
    },
    {
      to: '/plan-nu-salad-merge/',
      icon: 'fas fa-object-group',
      sublink: true,
      text: 'salad.nu is joining forces with Plan Northwestern this fall',
    },
  ]}
  linkColor="#d8b4fe"
  labels={[
    {
      to: 'https://www.mccormick.northwestern.edu/computer-science/',
      image:
        'https://img.shields.io/badge/sponsored-Northwestern%20Department%20of%20CS-blueviolet',
      alt: 'Project sponsored by the Northwestern University Department of Computer Science',
    },
    {
      to: 'https://github.com/dilanx/plan-northwestern',
      image:
        'https://img.shields.io/github/stars/dilanx/plan-northwestern?color=red',
      alt: 'Plan Northwestern GitHub stars',
    },
  ]}
  dark
  featured
>
  <img
    src="/images/calendar-solid.png"
    alt="Plan Northwestern logo"
    slot="image"
  />
  <h2>Plan Northwestern</h2>
  <p>
    An online tool used by thousands of Northwestern students to plan their
    school years.
  </p>
</Display>

<Display
  backgroundImage="
    linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url('/images/mcshaders1.jpg')
  "
  links={[gh('dilanx/dmslauncher')]}
  linkColor="#ffff8f"
  dark
  featured
>
  <img
    src="/images/dmslauncher.png"
    alt="DMSLauncher screenshot"
    slot="image"
  />
  <h2>DMSLauncher</h2>
  <p>An automatic modded client updater and launcher for Minecraft.</p>
</Display>

<Display
  backgroundImage="
    linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url('/images/discord.png')
  "
  links={[gh('dilanx/switchpresence')]}
  linkColor="#b8beff"
  dark
  featured
>
  <img
    src="/images/switchpresence.png"
    alt="SwitchPresence logo"
    slot="image"
  />
  <h2>SwitchPresence</h2>
  <p>
    A cross-platform desktop application that allows you to display Nintendo
    Switch games as your current activity on Discord.
  </p>
</Display>

<ContinueLink
  links={[
    {
      to: '/projects',
      text: 'See all projects',
    },
  ]}
/>

<Section ws hs>
  <Heading h2 large class="s left">A bit about me . . .</Heading>
  <ContentCard>
    <Heading h3 large socials={socials.dilan}>Dilan Nair</Heading>
    <Text sm>
      I'm a third-year undergraduate student at Northwestern University studying
      computer science. I've been a CS enjoyer for over 9 years, working on
      <a href="/projects">projects</a>
      ranging anywhere from desktop and mobile applications to developer tools to
      websites and web APIs to video games and game mods, many of which you'll find
      here on my site.
    </Text>
    <Text sm>
      I founded and used to manage
      <span class="s medium">Voidstone Software</span>
      , an online store dedicated to the development of private, custom game modifications
      on request. I'm also the founder and former president of the
      <span class="s medium">Software and Game Development Group</span>
      at Northwestern University, one of the largest student-run computer science
      organizations on campus focusing on the collaborative development of software
      applications and interactive entertainment. Outside of computer science, I
      have a strong interest in tech, adventure and story-driven video games, and
      music.
    </Text>
    <Text sm>
      If you ever need to contact me (including for any technical support for
      any of my apps and services), the best way to do so is by messaging me on
      Instagram.
    </Text>
    <ContinueLink
      links={[
        {
          to: 'https://instagram.com/dilan4k',
          text: 'Get in touch',
          icon: 'fab fa-instagram',
        },
        {
          to: 'https://github.com/sponsors/dilanx',
          text: 'Support my work',
          icon: 'fas fa-heart',
        },
        {
          to: 'https://dilan.blog',
          text: 'Check out my blog',
          icon: 'fas fa-book',
        },
      ]}
    />
  </ContentCard>
</Section>

<Section ws hs>
  <Heading h2 large class="s right">. . . and my team.</Heading>
  <ContentCard>
    <Heading h3 large socials={socials.defne}>Defne Deda</Heading>
    <Text md noPadding centerOnMobile class="s light">
      digital artist and graphics designer
    </Text>
  </ContentCard>
  <Text sm noPadding class="s center">
    Thanks to all of the
    <a href="/attributions#beta-testers">beta testers</a>
    as well!
  </Text>
  <ContinueLink
    links={[
      {
        to: '/attributions',
        text: 'See all attributions',
      },
    ]}
  />
</Section>

<Footer />
