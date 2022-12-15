<script lang="ts">
  import { blog, ext, gh, lm } from '$lib/common';
  import Display from '$lib/components/Display.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import HeadingBlock from '$lib/components/HeadingBlock.svelte';
  import Link from '$lib/components/Link.svelte';
  import LinkButtons from '$lib/components/LinkButtons.svelte';
  import Meta from '$lib/components/Meta.svelte';
  import Section from '$lib/components/Section.svelte';
  import Text from '$lib/components/Text.svelte';
</script>

<Meta description="Full-stack software developer" />

<HeadingBlock title="Hey there, I'm Dilan.">
  <LinkButtons
    mobileVertical
    links={[
      {
        to: '#about',
        text: 'Learn about me',
        icon: 'fas fa-face-smile',
      },
      {
        to: '/contact',
        text: 'Get in touch',
        icon: 'fas fa-envelope',
      },
      {
        to: 'https://github.com/sponsors/dilanx',
        text: 'Support my work',
        icon: 'fas fa-heart',
      },
      {
        to: 'https://dilan.blog',
        text: 'Check out my blog',
        icon: 'fas fa-book-bookmark',
      },
    ]}
  />
</HeadingBlock>

<Display
  backgroundImage="https://dilan.blog/img/a-comprehensive-react-tutorial-for-beginners/preview.jpg"
  darkenBackgroundImage
  links={[blog('a-comprehensive-react-tutorial-for-beginners')]}
  linkColor="#ee97b1"
  dark
  blog={25}
  mini
  icon="fas fa-code"
>
  <h2>A Comprehensive React Tutorial for Beginners</h2>
  <p>
    Trying to use the <strong>React</strong> UI library but not sure where to start?
    Check out this fun guide that covers all of the basics while building a simple
    Wordle clone!
  </p>
</Display>

<Display
  backgroundImage="https://dilan.blog/img/how-paper-manages-hundreds-of-thousands-of-lines-of-data/preview.jpg"
  darkenBackgroundImage
  links={[blog('how-paper-manages-hundreds-of-thousands-of-lines-of-data')]}
  linkColor="#ee97b1"
  dark
  blog={7}
  mini
  icon="fas fa-book-bookmark"
>
  <h2>How Paper Manages Hundreds of Thousands of Lines of Data</h2>
  <p>
    If you're interested in what goes on behind the scenes of the Paper course
    scheduler, check out this new blog post!
  </p>
</Display>

<Display
  backgroundColor="#0c5041"
  links={[
    {
      to: 'https://craco.js.org',
      newTab: true,
      icon: 'fas fa-book',
      text: 'Documentation',
    },
    gh('dilanx/craco'),
    {
      to: 'https://www.npmjs.com/package/@craco/craco',
      newTab: true,
      icon: 'fab fa-npm',
      text: 'npm',
    },
  ]}
  linkColor="#b5f3e6"
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
    lm('paper'),
    ext('Use Paper', 'https://www.paper.nu'),
    gh('dilanx/paper.nu'),
    {
      to: 'https://dilan.blog/tags/paper',
      newTab: true,
      icon: 'fas fa-book-bookmark',
      sublink: true,
      text: 'Read about what goes on behind the scenes of Paper!',
    },
    {
      to: 'https://www.mccormick.northwestern.edu/news/articles/2022/02/undergraduate-launches-course-planning-web-application/',
      newTab: true,
      icon: 'fas fa-newspaper',
      sublink: true,
      text: 'Read the official article by Northwestern Engineering!',
    },
  ]}
  linkColor="#ffffff"
  labels={[
    {
      to: 'https://github.com/dilanx/paper.nu',
      image: 'https://img.shields.io/github/stars/dilanx/paper.nu?color=red',
      alt: 'paper.nu GitHub stars',
    },
  ]}
  dark
  featured
>
  <img src="/images/paper-thick-white.png" alt="Paper logo" slot="image" />
  <h2>Paper</h2>
  <p>
    An online tool used by thousands of Northwestern students to plan and
    schedule their courses.
  </p>
</Display>

<Display
  backgroundImage="/images/mcshaders1.jpg"
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
  backgroundImage="/images/discord.png"
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

<LinkButtons
  links={[
    {
      to: '/projects',
      text: 'See all projects',
    },
  ]}
/>

<Section ws hs>
  <Heading h2 large class="s left" anchor="about">A bit about me.</Heading>

  <Text sm>
    Hey, I'm Dilan, a full-stack software engineer and third-year undergraduate
    student at Northwestern University studying computer science. I've been
    coding for over 10 years, working on
    <Link to="/projects">projects</Link>
    ranging anywhere from desktop and mobile applications to developer tools to websites
    and web APIs to video games and game mods, many of which you'll find here on
    my site.
  </Text>
  <Text sm>
    I'm a big proponent of open source software, with my most notable project
    being <Link to="https://github.com/dilanx/craco">CRACO</Link>, a mainstream
    library for React development.
  </Text>
  <Text sm>
    At Northwestern, I created <Link to="/paper">Paper</Link>, a course planning
    and scheduling tool sponsored by the university and used by thousands of
    students. I'm on the tech team for
    <Link to="https://dilloday.com/">Mayfest Productions</Link>, the
    organization behind <Link to="https://en.wikipedia.org/wiki/Dillo_Day"
      >Dillo Day</Link
    >. I'm also the Director of Web Development for
    <Link to="https://www.wildhacks.net">WildHacks</Link>, Northwestern's
    largest hackathon. I serve as an undergraduate teaching assistant for a
    variety of computer science courses. I'm also a member of the <Link
      to="https://www.nudrumline.org"
    >
      Northwestern University Drumline</Link
    >.
  </Text>
  <Text sm>
    I founded and used to manage
    <span class="s medium">Voidstone Software</span>, an online store dedicated
    to the development of private, custom game modifications on request. I'm
    also the founder and former president of the
    <span class="s medium">Software and Game Development Group</span>
    at Northwestern University, one of the largest student-run computer science organizations
    on campus focusing on the collaborative development of software applications
    and interactive entertainment. Outside of computer science, I have a strong interest
    in tech, adventure and story-driven video games, and music (fun fact: I used
    to play a lot of Minecraft and made a bunch of <Link to="/minecraft-maps"
      >Minecraft worlds</Link
    > played by popular YouTubers like CaptainSparklez, DanTDM, and more).
  </Text>
  <Text sm>
    Feel free to <Link to="/contact">get in touch</Link>!
  </Text>
</Section>
