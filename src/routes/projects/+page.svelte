<script lang="ts">
  import Bubble from '$lib/components/Bubble.svelte';
  import BubbleContainer from '$lib/components/BubbleContainer.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import LinkButtons from '$lib/components/LinkButtons.svelte';
  import Meta from '$lib/components/Meta.svelte';
  import Section from '$lib/components/Section.svelte';
</script>

<Meta title="Projects" description="Full-stack software developer" />
<Heading h1 hidden>Projects</Heading>

<Section
  wm
  hs
  label={{
    title: 'APPLICATIONS',
    subtitle:
      "Desktop, mobile, and web applications I've created or am working on",
  }}
>
  <BubbleContainer>
    <Bubble
      to="/paper"
      title="Paper"
      description="Plan your courses at Northwestern University."
      backgroundColor="#262626"
      dark
    />
    <Bubble
      to="https://github.com/dilanx/dmslauncher"
      newTab
      title="DMSLauncher"
      description="The better way to launch your modded game."
      backgroundImage="
        linear-gradient(
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        ),
        url('/images/mcshaders1.jpg')"
      dark
    />
    <Bubble
      to="https://github.com/dilanx/switchpresence"
      newTab
      title="SwitchPresence"
      description="Display your Nintendo Switch games as your Discord activity."
      backgroundImage="
        linear-gradient(
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        ),
        url('/images/discord.png')
      "
      dark
    />
    <Bubble
      to="https://chrome.google.com/webstore/detail/paste-list/nolfbfhaicjldjodgafpaheehkolchdf"
      newTab
      title="Paste List"
      description="Simplify your browser's clipboard."
      backgroundImage="linear-gradient(to right, #ffe9e9, #e9ffe9)"
    />
  </BubbleContainer>
</Section>

<Section
  wm
  hs
  label={{
    title: 'DEVELOPER TOOLS',
    subtitle:
      "Tools I've developed for developers of all kinds\u2014programmers, website creators, etc.",
  }}
>
  <BubbleContainer>
    <Bubble
      to="https://craco.js.org"
      newTab
      title="CRACO"
      description="An easy and comprehensible configuration layer for Create React App."
    />
    <Bubble
      title="CommandMaker"
      description="Build your own command-line interface."
    />
    <Bubble
      to="https://github.com/dilanx/config"
      newTab
      title="config"
      description="Maintain consistency across your projects with consistent styling and configuration."
    />
    <Bubble
      to="https://github.com/dilanx/terminal-pastelle"
      title="terminal-pastelle"
      description="A nice pastel-type theme for a variety of terminals."
    />
  </BubbleContainer>
</Section>

<Section
  wm
  hs
  label={{
    title: 'ORGANIZATIONS AND THIRD PARTY',
    subtitle: 'Organizations and services I am or was involved with',
  }}
>
  <BubbleContainer>
    <Bubble
      title="Voidstone Software"
      description="Quality custom software and game modifications curated to your taste."
      backgroundColor="black"
      role="founder and software developer"
      dark
    />
    <Bubble
      title="SGDG"
      description="The premier student organization for software and game development at Northwestern University."
      backgroundColor="#f9ffff"
      role="founder and former president"
    />
    <Bubble
      to="https://www.wildhacks.net"
      newTab
      title="WildHacks"
      description="Northwestern University's largest hackathon."
      role="web development director"
      backgroundColor="#180b2f"
      dark
    />
    <Bubble
      to="https://dilloday.com"
      newTab
      title="Mayfest Productions"
      description="The Northwestern University student organization behind Dillo Day, the nation's largest student-run music festival."
      role="tech team"
      backgroundImage="
        linear-gradient(
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        ),
        url('/images/dilloday.jpeg')
      "
      dark
    />
    <Bubble
      to="https://www.nudrumline.org"
      newTab
      title="Northwestern Drumline"
      description="The drumline section of the Northwestern University Marching Band."
      role="snare player and website developer"
      backgroundImage="
        linear-gradient(
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        ),
        url('/images/drumline.jpg')
      "
      dark
    />
    <Bubble
      to="https://www.overture.games"
      newTab
      title="Overture Games"
      description="A game development startup at Northwestern University focusing on improving the practicing experience of musicians."
      role="independent contractor website developer"
      backgroundImage="
        linear-gradient(
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        ),
        url('/images/overture-games.jpg')
      "
      dark
    />
  </BubbleContainer>
</Section>

<Section
  wm
  hs
  label={{
    title: 'MINECRAFT',
    subtitle: "Things I've made for or within the popular game Minecraft",
  }}
>
  <BubbleContainer>
    <Bubble
      to="https://github.com/dilanx/WedBars"
      newTab
      title="WedBars"
      description="Hypixel's Bed Wars but way better. Trust me."
      backgroundImage="
        linear-gradient(
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        ),
        url('/images/mcshaders2.jpg')
      "
      dark
    />
    <Bubble
      title="Minecraft Maps"
      description="Old Minecraft game worlds available for download. Played by YouTubers like DanTDM, CaptainSparklez, Logdotzip, and more."
      backgroundImage="
        linear-gradient(
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        ),
        url('/images/mcshaders3.jpg')
      "
      dark
    />
  </BubbleContainer>
</Section>

<LinkButtons
  margin
  links={[
    {
      to: 'https://github.com/dilanx',
      text: 'Check out my projects on GitHub',
      icon: 'fab fa-github',
    },
  ]}
/>
