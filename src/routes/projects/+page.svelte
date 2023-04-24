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
    <Bubble
      to="https://github.com/dilanx/TimeManager"
      newTab
      title="TimeManager"
      description="Easily log time for your projects or tasks."
      backgroundImage="linear-gradient(to right, #fbcfe8, #f5d0fe)"
      old
    />
    <Bubble
      to="https://docs.dilanxd.com/flapxd"
      newTab
      title="FlapXD"
      description="Flappy bird taken to the previous level."
      backgroundImage="
        linear-gradient(
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        ),
        url('/images/flapxd.png')
      "
      dark
      old
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
      to="https://github.com/dilanx/create-tutorial"
      newTab
      title="create-tutorial"
      description="An npm command line tool to load tutorial starter code."
    />
    <Bubble
      to="https://github.com/dilanx/terminal-pastelle"
      newTab
      title="terminal-pastelle"
      description="A nice pastel-type theme for a variety of terminals."
    />
    <Bubble
      to="https://github.com/dilanx/redark"
      newTab
      title="redark"
      description="A dark theme for Redoc."
    />
    <Bubble
      to="https://github.com/dilanx/ChoccyStatus"
      newTab
      title="ChoccyStatus"
      description="A customizable, JSON-based status page for static sites."
      deprecated
    />
    <Bubble
      to="https://github.com/dilanx/GamerLanguage"
      newTab
      title="GamerLanguage"
      description="An esoteric joke programming language for gamers."
      deprecated
    />
    <Bubble
      to="https://github.com/dilanx/dilanscript"
      newTab
      title="dilanscript"
      description="A super easy-to-use data storage or configuration file with parser API."
      deprecated
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
      to="https://www.wildhacks.net"
      newTab
      title="WildHacks"
      description="Northwestern University's largest hackathon."
      role="director"
      backgroundColor="#180b2f"
      dark
      date="2022 +"
    />
    <Bubble
      to="https://dilloday.com"
      newTab
      title="Mayfest Productions"
      description="The Northwestern University student organization behind Dillo Day, the nation's largest student-run music festival."
      role="tech team software developer"
      backgroundImage="
        linear-gradient(
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        ),
        url('/images/dilloday.jpeg')
      "
      dark
      date="2022 +"
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
      date="2020 - 2022"
    />
    <Bubble
      title="SGDG"
      description="The premier student organization for software and game development at Northwestern University."
      backgroundColor="#f9ffff"
      role="founder and former president"
      date="2021 - 2022"
    />
    <Bubble
      to="https://voidstone.dilanxd.com"
      newTab
      title="Voidstone Software"
      description="Quality custom software and game modifications curated to your taste."
      backgroundColor="black"
      role="founder and software developer"
      dark
      date="2015 - 2020"
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
      to="/minecraft-maps"
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

<Section
  wm
  hs
  label={{
    title: 'DEVELOPER RESOURCES',
    subtitle:
      'Resources and configuration presets for myself and other developers',
  }}
>
  <BubbleContainer>
    <Bubble
      to="https://github.com/dilanx/config"
      newTab
      title="config"
      description="Maintain consistency across your projects with consistent styling and configuration."
    />
    <Bubble
      to="https://github.com/dilanx/avatar"
      newTab
      title="avatar"
      description="A simple letter-color avatar component for auth.dilanxd.com avatars."
    />
    <Bubble
      to="https://github.com/dilanx/themes"
      newTab
      title="themes"
      description="A collection of themes used on my websites."
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
