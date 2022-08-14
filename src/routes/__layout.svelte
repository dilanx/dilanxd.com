<script>
  import '../app.scss';
</script>

<svelte:head>
  <script
    src="https://kit.fontawesome.com/272ac1b8d8.js"
    crossorigin="anonymous"></script>
  {#if import.meta.env.PROD}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-2T5NF1VGGK"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());

      gtag('config', 'G-2T5NF1VGGK');
    </script>
  {/if}
</svelte:head>

<slot />
