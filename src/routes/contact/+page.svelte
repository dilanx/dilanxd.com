<script lang="ts">
  import Heading from '$lib/components/Heading.svelte';
  import ImageTitle from '$lib/components/ImageTitle.svelte';
  import LinkButtons from '$lib/components/LinkButtons.svelte';
  import Meta from '$lib/components/Meta.svelte';
  import Section from '$lib/components/Section.svelte';
  import Text from '$lib/components/Text.svelte';
</script>

<Meta title="Contact" />
<Heading h1 hidden>Contact Me</Heading>

<Section ws hm>
  <ImageTitle images={['fas fa-person-falling-burst']}>Get in touch</ImageTitle>
  <Text sm center>
    First, check out the help center for help with common issues.
  </Text>
  <LinkButtons
    links={[
      {
        text: 'Help Center',
        to: 'https://support.dilanxd.com',
        icon: 'fas fa-book',
      },
    ]}
  />
  <Text sm center>
    Otherwise, for inquiries of all kinds, send a message to
  </Text>
  <Text lg center bold nom>
    <a href="mailto:support@dilanxd.com">support@dilanxd.com</a>
  </Text>
</Section>
