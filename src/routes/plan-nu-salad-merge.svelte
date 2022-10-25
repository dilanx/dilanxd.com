<script lang="ts">
  import Divider from '$lib/components/Divider.svelte';
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
  <Text sm class="s center">
    <span style="color: #646464;">
      RELEASING <span class="s heavy">NOVEMBER 1 2022</span>
    </span>
  </Text>
  <Text sm>
    Together, <a href="https://www.plan-nu.com">Plan Northwestern</a>, a 4 year
    course planning tool, and <a href="https://www.salad.nu">salad.nu</a>, a
    quarter course scheduling tool, help thousands of Northwestern students
    every week plan out their Northwestern journey. To make the user experience
    for these tools even better, salad.nu will be merged with Plan Northwestern.
  </Text>
  <Text sm>
    You can expect the new version to have everything you love about both tools,
    including the easiness of just navigating to the site and being able to see
    your plan or schedule and search for courses instantly. The experience will
    only get better. Below, you can find some of the new features.
  </Text>
  <Text sm>
    This project is developed in partnership with <span class="s bold"
      >Northwestern Computer Science</span
    >,
    <span class="s bold">Northwestern's Office of the Registrar</span>, and
    <span class="s bold">Northwestern IT</span>.
  </Text>
</Section>

<Divider />

<Section ws hs>
  <Heading h2 anchor="multiple-schedules-and-devices">
    Multiple schedules and devices
  </Heading>
  <Text sm>
    Thanks to Plan Northwestern's secure account system, you'll be able to save
    multiple schedules to your account, easily switch between them, and view
    them across different devices. Also, just like Plan Northwestern, the
    schedule data is saved in the URL, which you can save or share with others.
  </Text>
  <Text sm>
    You can still use the site and access all of the course data without making
    an account.
  </Text>
</Section>

<Section ws hs>
  <Heading h2 anchor="powerful-search">Powerful search</Heading>
  <Text sm>
    Plan Northwestern will bring its powerful search functionality to
    scheduling. Here are some advanced search features you can choose to use as
    needed:

    <ul>
      <li>Filter by subject</li>
      <li>Filter by meeting days and time frames</li>
      <li>Filter by course components (lecture, discussion, etc.)</li>
      <li>Filter by instructor</li>
      <li>Filter by location</li>
      <li>
        Search shortcuts ('cs' brings up 'COMP_SCI' courses, 'ea' brings up both
        'GEN_ENG 205' and 'GEN_ENG 206', etc.)
      </li>
    </ul>

    You can mix and match filters and search with text while filters are active.
  </Text>
</Section>

<Section ws hs>
  <Heading h2 anchor="a-crazy-amount-of-course-data">
    A crazy amount of course data
  </Heading>
  <Text sm>
    Thanks to our partnership with Northwestern's Office of the Registrar and
    Northwestern IT, Plan Northwestern has all of the class data right from
    CAESAR. For each class, you'll be able to view information like course
    descriptions, prerequisites, units, enrollment capacity, meeting dates and
    times, meeting locations, enrollment requirements, instructor information
    (name, campus address, office hours, etc.), and more. Course data will be
    automatically updated often to ensure that you always have the most
    up-to-date information.
  </Text>
</Section>

<Section ws hs>
  <Heading h2 anchor="present-and-past-schedules">
    Present and past schedules
  </Heading>
  <Text sm>
    New course information for the upcoming quarter will be available on the
    site right when it's released. Right when CAESAR gets it, you'll get it on
    Plan Northwestern, too. When this happens, your past schedules will still be
    available.
  </Text>
</Section>

<Section ws hs>
  <Heading h2 anchor="better-export-options">Better export options</Heading>
  <Text sm>
    You'll be able to export your schedule as an image at full resolution,
    regardless of the device you're on. No more need for manual screenshots!
    You'll also be able to export your schedule to your calendar app of choice,
    including Google Calendar, Apple Calendar, and Outlook.
  </Text>
</Section>

<Section ws hs>
  <Heading h2 anchor="intuitive-user-interface">
    Intuitive user interface
  </Heading>
  <Text sm>
    Easily return to your schedule instantly when you visit the site, and switch
    between your plan and your schedule as needed. Quickly find exactly what you
    need, drag and drop things, and more!
  </Text>
</Section>

<Section ws hs>
  <Heading h2 anchor="seamless-integration">Seamless integration</Heading>
  <Text sm>Move courses between your plan and your schedule.</Text>
</Section>

<Section ws hs>
  <Heading h2 anchor="built-in-feedback-submission"
    >Built-in feedback submission</Heading
  >
  <Text sm>
    Share your feedback without even leaving the site. That includes bug
    reports, feature requests, and other general feedback.
  </Text>
</Section>

<Divider />

<Section ws hm>
  <Text sm>
    If you'd like to talk about this more, share your ideas with me, or
    contribute to the project, feel free to get in touch by <a
      href="https://instagram.com/dilan4k">messaging me on Instagram</a
    >. You can also message me on Discord at Dilan#1000 (you'll need to join the
    <a href="https://discord.gg/aERJFBAhyP">Northwestern Discord Server</a>
    first). If you're interested, you can
    <a href="https://forms.gle/oqcm8q2qvX615Fry9"
      >sign up to help beta test the software</a
    >! You'll get access to early versions and will be tasked with using it and
    finding any bugs and glitches. Also, thanks to our automatic data refreshing
    system, this project can live on for years beyond my graduation.
  </Text>

  <Text sm>
    I hope you're as excited for this as I am. It'll be an amazing update with a
    ton of cool things that make planning and scheduling at this school a lot
    more enjoyable and productive.
  </Text>
  <Text sm class="s right">- Dilan Nair, McCormick class of 2024</Text>
</Section>

<Footer />
