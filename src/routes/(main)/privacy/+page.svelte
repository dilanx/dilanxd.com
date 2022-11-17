<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Heading from '$lib/components/Heading.svelte';
  import ImageTitle from '$lib/components/ImageTitle.svelte';
  import Navigation from '$lib/components/Navigation.svelte';
  import Section from '$lib/components/Section.svelte';
  import Text from '$lib/components/Text.svelte';

  let c = 1;
</script>

<svelte:head>
  <title>Privacy Policy - Dilan Nair</title>
</svelte:head>

<Heading h1 hidden>Privacy Policy</Heading>

<Section ws hm>
  <ImageTitle images={['fas fa-lock']}>Privacy</ImageTitle>

  <Text sm class="s center">
    Below, you'll find everything you need to know about what happens with the
    data you provide to the applications or services created or run by me. If
    you have any further questions or concerns, feel free to send an email to <a
      href="mailto:support@dilanxd.com">support@dilanxd.com</a
    > at any time.
  </Text>

  <Text sm class="s medium center">Last updated 2022-10-31</Text>
</Section>

<Section ws hs>
  <Heading h2 anchor="prologue" class="s light">Prologue</Heading>
  <Text sm>
    This privacy policy, written by Dilan Nair ("I", "me", "my") for the end
    users ("you", "your") is intended to outline the data collection and usage
    practices of all of the applications and services created and currently
    managed by Dilan Nair ("service", "services"). Authentication takes place
    only on auth.dilanxd.com ("authentication system") through redirects from
    the services.
  </Text>
</Section>

<Section ws hs>
  <Heading h2 anchor="services-that-access-your-user-data" class="s light">
    Chapter {c++}: Services that access your user data
  </Heading>
  <Text sm>
    The following services may access your user data through auth.dilanxd.com:

    <ul>
      <li>paper.nu (read, write)</li>
    </ul>

    All other services do not access your user data, therefore the privacy
    policy is not applicable. However, Google Analytics may be used within the
    service to track and anonymously report website traffic and demographics.
    Refer to
    <a href="https://policies.google.com/privacy">Google's privacy policy</a> for
    information on how they collect data.
  </Text>
</Section>

<Section ws hs>
  <Heading h2 anchor="about-the-authentication-system" class="s light">
    Chapter {c++}: About the authentication system
  </Heading>
  <Text sm>
    The authentication system serves as the bridge between the service you're
    using and your data. You will only log in on <span class="s medium"
      >auth.dilanxd.com</span
    >. Do NOT log in if you are not on this domain or if the site is not secured
    (ensure that the lock symbol is present in your browser's address bar).
  </Text>
</Section>

<Section ws hs>
  <Heading h2 anchor="collected-personal-data" class="s light">
    Chapter {c++}: Collected personal data
  </Heading>
  <Text sm>
    When creating an account through the authentication system, you only have
    the option to continue using your Google account. Currently, there are no
    other options. Using a third-party like Google to authenticate allows for a
    significantly more secure and reliable authentication experience for you as
    opposed to a custom one. There's no point in developing one from the ground
    up when Google's robust system already exists.
  </Text>

  <Text sm>
    After authenticating with Google, some basic user information is sent to my
    authentication system. Your email address is then linked to a unique user ID
    for you within my database. No other data is collected or stored, including
    any sensitive information like passwords. Only your Google account's primary
    email address is saved. Any other stored data is only what you specifically
    provide within any service.
  </Text>
</Section>

<Section ws hs>
  <Heading h2 anchor="data-access" class="s light">
    Chapter {c++}: Data access
  </Heading>

  <Text sm>
    Only authorized services can access the data you provide, and this is only
    possible through my API. All services are created and maintained by me and
    trusted contributors. Access to the authentication system's developer
    interface is not given to any third party.
  </Text>

  <Text sm>
    All services that use the authentication system will have a sign out button
    of some sort. Using that button will sign you out of the service and the
    authentication system. You can manually sign out of the authentication
    system by visiting <span class="s medium"
      >auth.dilanxd.com/authenticate/logout</span
    >. Signing out of the authentication system will NOT sign you out of all of
    the services. The services will automatically lose access within
    approximately 3 days. If the service is a web application accessed within
    the browser, you can clear the service's cookies to revoke access
    immediately.
  </Text>
</Section>

<Section ws hs>
  <Heading h2 anchor="security" class="s light">
    Chapter {c++}: Security
  </Heading>

  <Text sm>
    Don't share your Google account password with anyone else. Although, if you
    did, you'd probably have bigger issues to worry about than those related to
    my services.
  </Text>

  <Text sm>
    If you have any reason to believe your account is compromised, notify me
    immediately so we can resolve the issue. You can also let me know if you
    have any other questions about my security and data collection practices!
  </Text>
</Section>
