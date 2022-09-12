<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import ImageTitle from '$lib/components/ImageTitle.svelte';
  import Navigation from '$lib/components/Navigation.svelte';
  import Section from '$lib/components/Section.svelte';
  import Text from '$lib/components/Text.svelte';
</script>

<svelte:head>
  <title>Plan Northwestern x salad.nu - Dilan Nair</title>
</svelte:head>

<Navigation />

<Heading h1 hidden>Plan Northwestern x salad.nu</Heading>

<Section ws hm>
  <ImageTitle
    images={[
      {
        src: '/images/calendar-solid.svg',
        alt: 'Plan Northwestern Logo',
        padding: '16px',
        backgroundColor: '#e9d5ff',
        rounded: true,
      },
      {
        icon: 'fa-solid fa-xmark',
        color: '#646464',
      },
      {
        src: '/images/salad.png',
        alt: 'salad.nu Logo',
        padding: '16px',
        backgroundColor: '#dcf0da',
        rounded: true,
      },
    ]}
  >
    salad.nu joins Plan Northwestern
  </ImageTitle>
  <Text md class="s center">
    <a href="https://www.plan-nu.com">Plan Northwestern</a>, a 4 year course
    planning tool, and <a href="https://www.salad.nu">salad.nu</a>, a quarter
    course scheduling tool, will be integrated with each other this fall.
  </Text>
</Section>

<Section ws hs>
  <Heading h2 anchor="whats-happening">What's happening?</Heading>
  <Text sm>
    salad.nu is a super useful tool for Northwestern students to schedule their
    classes for a given quarter. Andy, the creator of salad.nu, will be
    graduating and is handing off the project to someone who'd like to maintain
    it going forward. Thus, the project will be merged with Plan Northwestern to
    provide an enhanced user experience.
  </Text>
</Section>

<Section ws hs>
  <Heading h2 anchor="whats-changing-with-salad-nu">
    What's changing with salad.nu?
  </Heading>
  <Text sm>
    You can expect the new version to have everything you love about salad.nu,
    including the easiness of just navigating to the site and being able to see
    your schedule and search for courses instantly. This version will have a
    bunch of new features.
  </Text>
  <Text sm>
    <ul>
      <li>
        <Text sm class="s bold">Multiple schedules</Text>
        <Text sm noPadding>
          If you're like me, you've probably created multiple version's of a
          schedule for an upcoming quarter by stuffing all of the different
          courses on one screen and then hoping that you'll remember which
          belongs with which. Fret no more, because thanks to Plan
          Northwestern's URL data storage system, schedule data will be saved in
          the URL, making your schedule savable and sharable. You can send the
          link to a friend so they can view a copy of your schedule, or swap it
          out with another link to view another schedule of yours.
        </Text>
      </li>
      <li>
        <Text sm class="s bold">Sync across your devices</Text>
        <Text sm noPadding>
          With the account system introduced in Plan Northwestern v1.2, you can
          save up to 5 plans to your account and view them across devices. Using
          this same system, you'll be able to save 10 schedules to your account
          in the same way.
        </Text>
      </li>
      <li>
        <Text sm class="s bold">Powerful search</Text>
        <Text sm noPadding>
          Plan Northwestern will bring its powerful search functionality to
          scheduling. Here are some advanced search features you can choose to
          use as needed:
          <ul>
            <li>Filter by subject</li>
            <li>Filter by meeting days and time frames</li>
            <li>Filter by course components (lecture, discussion, etc.)</li>
            <li>Filter by instructor</li>
            <li>Filter by location</li>
            <li>
              Search shortcuts ('cs' brings up 'COMP_SCI' courses, 'ea' brings
              up both 'GEN_ENG 205' and 'GEN_ENG 206', etc.)
            </li>
          </ul>
        </Text>
      </li>
      <li>
        <Text sm class="s bold">Custom course sections</Text>
        <Text sm noPadding>
          You'll be able to add custom course sections to schedules linked to
          your account.
        </Text>
      </li>
      <li>
        <Text sm class="s bold">Better export options</Text>
        <Text sm noPadding>
          You'll be able to export your schedule as an image at full resolution,
          regardless of the device you're on. No more need for manual
          screenshots! You'll also be able to export your schedule as an ICS
          file, which you can import into your calendar app of choice, including
          Google Calendar, Apple Calendar, and Outlook.
        </Text>
      </li>
      <li>
        <Text sm class="s bold">More course data</Text>
        <Text sm noPadding>
          Combining the detailed course data used in Plan Northwestern with
          specific quarter data, you'll be able to get more information about
          course on your schedule.
        </Text>
      </li>
      <li>
        <Text sm class="s bold">Latest course data</Text>
        <Text sm noPadding>
          Section data will be refreshed from CAESAR weekly so you're always up
          to date with the latest course section changes.
        </Text>
      </li>
      <li>
        <Text sm class="s bold">Intuitive user interface</Text>
        <Text sm noPadding>
          Easily return to your schedule instantly when you visit the site, and
          switch between your plan and your schedule as needed.
        </Text>
      </li>
      <li>
        <Text sm class="s bold">Seamless integration</Text>
        <Text sm noPadding>Move courses between your plan and schedule.</Text>
      </li>
      <li>
        <Text sm class="s bold">Built-in feedback submission</Text>
        <Text sm noPadding>
          Share your feedback with me without even leaving the site. That
          includes bug reports, feature requests, and general feedback.
        </Text>
      </li>
    </ul>
  </Text>
  <Text sm>
    <span class="s italic">
      All features listed above are tentative and may not be implemented exactly
      as described here.
    </span>
  </Text>
</Section>

<Section ws hs>
  <Heading h2 anchor="will-this-be-too-complex">
    Will this be too complex?
  </Heading>
  <Text sm>
    Not at all. Plan Northwestern and salad.nu are easy to use right now, and
    it'll stay that way. A lot of the heavy work will be done for you
    automatically in the background. Your browser will still remember and load
    your most recent plan and schedule. You don't need an account at all. If you
    choose to make one to access your plans across devices and easily switch
    between multiple schedules rather than switching out URLs, all you have to
    do is sign in with an existing Google account. All of your saved data will
    appear before your eyes, ready to use right away. You'll just need to use
    the site as you normally would. New features that enhance the experience
    will only be where they're convenient and easy to use.
  </Text>
</Section>

<Section ws hs>
  <Heading h2 anchor="can-i-help">Can I help?</Heading>
  <Text sm>
    Yes, please! <a href="https://forms.gle/oqcm8q2qvX615Fry9"
      >You can sign up to help beta test the software here.</a
    > You'll get access to early versions and will be tasked with using it and finding
    any bugs and glitches. If you're interested in contributing and have experience
    with TypeScript and React (and optionally Tailwind CSS), contact me on Instagram
    or Discord.
  </Text>
</Section>

<Section ws hs>
  <Heading h2 anchor="how-can-i-reach-you">How can I reach you?</Heading>
  <Text sm>
    If you'd like to talk about this more or share your ideas with me, feel free
    to get in touch by messaging me on Instagram at <a
      href="https://instagram.com/dilan4k">instagram.com/dilan4k</a
    >. Alternatively, you can message me on Discord at Dilan#1000 (you'll need
    to join the
    <a href="https://discord.gg/aERJFBAhyP">Northwestern Discord Server</a> first).
    You're always welcome to ask any questions you have about this project.
  </Text>
</Section>

<Section ws hs>
  <Heading h2 anchor="when-will-this-be-completed">
    When will this be completed?
  </Heading>
  <Text sm>
    The new version will be available this fall (2022) with the Winter 2023
    courses.
  </Text>
</Section>

<Section ws hs>
  <Heading h2 anchor="whos-working-on-this">Who's working on this?</Heading>
  <Text sm>
    Me, <a href="/">Dilan</a>!
  </Text>
</Section>

<Footer />
