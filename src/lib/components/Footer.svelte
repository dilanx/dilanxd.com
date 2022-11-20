<footer>
  <p>Copyright &#169; 2022 Dilan Nair</p>
  <p>
    <a href="https://dilan.statuspage.io">System Status</a> |
    <a href="https://github.com/sponsors/dilanx">Sponsor</a> |
    <a href="/privacy">Privacy</a>
    | <a href="/attributions">Attributions</a>
  </p>
</footer>

<style lang="scss">
  @use '../theme';

  footer {
    background-color: theme.$footer-bg;
    margin: 0;
    padding: 32px 24px;
    text-align: center;
    font-size: 14px;
  }

  p {
    display: block;
    margin: 5px;
    color: theme.$footer-primary;
  }

  a {
    color: theme.$footer-link;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
</style>
