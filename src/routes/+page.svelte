<script lang="ts">
  import { blog, ext, gh, lm } from '$lib/common';
  import ExperienceFeatureItem from '$lib/components/ExperienceFeatureItem.svelte';
  import ExperienceFeatureList from '$lib/components/ExperienceFeatureList.svelte';
  import Cursor from '$lib/components/Cursor.svelte';
  import Display from '$lib/components/Display.svelte';
  import ExperienceItem from '$lib/components/ExperienceItem.svelte';
  import ExperienceList from '$lib/components/ExperienceList.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import HeadingBlock from '$lib/components/HeadingBlock.svelte';
  import Link from '$lib/components/Link.svelte';
  import LinkButtons from '$lib/components/LinkButtons.svelte';
  import Meta from '$lib/components/Meta.svelte';
  import Section from '$lib/components/Section.svelte';
  import Text from '$lib/components/Text.svelte';
  import Christmas from '$lib/themes/Christmas.svelte';
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
    An online tool sponsored by the university and used by thousands of
    Northwestern students to plan and schedule their courses.
  </p>
</Display>

<Display
  backgroundImage="https://dilan.blog/img/a-comprehensive-react-tutorial-for-beginners/preview.jpg"
  darkenBackgroundImage
  links={[blog('a-comprehensive-react-tutorial-for-beginners')]}
  linkColor="#ee97b1"
  dark
  blog={26}
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

  <ExperienceList>
    <ExperienceItem
      type="education"
      time="2020 - 2024"
      title="Northwestern University"
      subtitle="Bachelor of Science, Computer Science"
      img="/images/nu-seal.png"
    >
      <ExperienceFeatureList>
        <ExperienceFeatureItem award>
          Computer Science Student Hero (2022-2023)
        </ExperienceFeatureItem>
        <ExperienceFeatureItem award>
          Computer Science Outstanding Peer Mentor (Winter 2022)
        </ExperienceFeatureItem>
        <ExperienceFeatureItem presentation>
          <Link
            to="https://northwestern.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f2ef1c03-693e-4279-a613-af9c016b4a62"
            >Tech Talk: Finding your Passion Project</Link
          > by Dilan Nair (February 2023)
        </ExperienceFeatureItem>
      </ExperienceFeatureList>
    </ExperienceItem>

    <ExperienceItem
      type="organization"
      time="2022 - Present"
      title="WildHacks"
      subtitle="Director"
      img="/images/wildhacks.png"
      next
    >
      <Link to="https://www.wildhacks.net">WildHacks</Link> is Northwestern's largest
      hackathon. I was the Director of Website Development for WildHacks 2023, leading
      the development of the WildHacks website and dashboard. For WildHacks 2024,
      I am directing the entire event.
    </ExperienceItem>

    <ExperienceItem
      type="organization"
      time="2022 - Present"
      title="Mayfest Productions"
      subtitle="Director of Tech"
      img="/images/dillo.png"
      prev
      next
    >
      <Link to="https://dilloday.com">Mayfest Productions</Link> is the organization
      behind <Link to="https://en.wikipedia.org/wiki/Dillo_Day">Dillo Day</Link
      >, the nation's largest student-run music festival. I was a member of the
      tech team for 2022-2023 and am directing the team for 2023-2024.
    </ExperienceItem>

    <ExperienceItem
      type="organization"
      time="2020 - 2022"
      title="Northwestern Drumline"
      subtitle="Snare Player"
      img="/images/drumline-logo.png"
      prev
      next
    >
      The <Link to="https://www.nudrumline.org"
        >Northwestern University Drumline</Link
      > is the official drumline of the Northwestern University Marching Band. I
      played snare for 3 years on the line.
    </ExperienceItem>

    <ExperienceItem
      type="organization"
      time="2021 - 2022"
      title="The Software and Game Development Group"
      subtitle="Founder and President"
      img="/images/sgdg.png"
      prev
    >
      <span class="s bold">SGDG</span> was the premier student organization for software
      and game development at Northwestern University. I founded the organization
      to connect developers of all kinds together, but eventually stepped down to
      focus on other commitments.
    </ExperienceItem>

    <ExperienceItem
      type="work"
      time="2023 - 2023"
      title="Apple"
      subtitle="Software Engineer Intern"
      img="/images/apple.svg"
      next
    >
      Over the summer of 2023, I worked at <Link to="https://www.apple.com/"
        >Apple</Link
      > as a Software Engineer Intern on the <Link
        to="https://developer.apple.com/xcode/">Xcode</Link
      > team.
    </ExperienceItem>

    <ExperienceItem
      type="work"
      time="2021 - Present"
      title="Northwestern University"
      subtitle="Undergraduate Teaching Assistant"
      img="/images/nu-seal.png"
      prev
      next
    >
      <ul>
        <li>
          COMP_SCI 211: Fundamentals of Computer Programming II (Spring 2021,
          Fall 2021, Winter 2022, Spring 2022)
        </li>
        <li>COMP_SCI 343: Operating Systems (Fall 2022)</li>
        <li>COMP_SCI 213: Intro to Computer Systems (Winter 2023)</li>
        <li>COMP_SCI 310: Scalable Software Architectures (Spring 2023)</li>
      </ul>
    </ExperienceItem>

    <ExperienceItem
      type="work"
      time="2022 - 2022"
      title="Northwestern Mutual"
      subtitle="Software Engineer Intern"
      img="/images/northwestern-mutual.png"
      prev
      next
    >
      Over the summer of 2022, I worked at <Link
        to="https://www.northwesternmutual.com/">Northwestern Mutual</Link
      > as a Software Engineer Intern.
    </ExperienceItem>

    <ExperienceItem
      type="work"
      time="2015 - 2020"
      title="Voidstone Software"
      subtitle="Founder and Software Developer"
      img="/images/voidstone.png"
      prev
    >
      As a child learning to code, I created <span class="s bold"
        >Voidstone Software</span
      >, an online store dedicated to the development of private, custom game
      modifications on request.
    </ExperienceItem>
  </ExperienceList>
</Section>
