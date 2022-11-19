<script lang="ts">
  import Bubble from '$lib/components/Bubble.svelte';
  import BubbleContainer from '$lib/components/BubbleContainer.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import LinkButtons from '$lib/components/LinkButtons.svelte';
  import Section from '$lib/components/Section.svelte';
</script>

<svelte:head>
  <title>Projects - Dilan Nair</title>
</svelte:head>

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
      "Tools I've developed for developers of all kinds\u2014programmers,website creators, etc.",
  }}
>
  <BubbleContainer>
    <Bubble
      to="https://github.com/dilanx/craco"
      newTab
      title="CRACO"
      description="An easy and comprehensible configuration layer for Create React App."
    />
    <Bubble
      title="auth.dilanxd.com"
      description="A simple yet secure authentication API (invite only; more info coming soon)."
    />
    <Bubble
      to="https://github.com/dilanx/choccystatus"
      newTab
      title="ChoccyStatus"
      description="A customizable, JSON-based status page for static sites."
    />
    <Bubble
      to="https://github.com/dilanx/config"
      newTab
      title="config"
      description="Maintain consistency across your projects with consistent styling and configuration."
    />
    <Bubble
      to="https://github.com/dilanx/gamerlanguage"
      newTab
      title="GamerLanguage"
      description="An esoteric joke programming language for gamers."
    />
    <Bubble
      to="https://github.com/dilanx/hyper-pastelle"
      title="hyper-pastelle"
      description="A nice pastel-type theme for the Hyper terminal."
    />
  </BubbleContainer>
</Section>

<Section
  wm
  hs
  label={{
    title: 'ORGANIZATIONS',
    subtitle: 'Organizations and services I currently or used to run',
  }}
>
  <BubbleContainer>
    <Bubble
      title="Voidstone Software"
      description="Quality custom software and game modifications curated to your taste."
      backgroundColor="black"
      dark
    />
    <Bubble
      title="SGDG"
      description="The premier student organization for software and game development at Northwestern University."
      backgroundColor="f9ffff"
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
<Section
  wm
  hs
  label={{
    title: 'THIRD PARTY',
    subtitle: "Things I've made for others or helped others make",
  }}
>
  <BubbleContainer>
    <Bubble
      to="https://www.overture.games"
      newTab
      title="Overture Games"
      role="WEBSITE DEVELOPER"
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
