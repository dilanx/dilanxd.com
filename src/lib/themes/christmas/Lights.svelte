<div>
  <img src="/images/christmas-lights.jpg" alt="Christmas lights" />
</div>

<style lang="scss">
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    overflow: hidden;
  }

  img {
    width: 100%;
    transform: scale(3) translateY(36px);
  }

  @media (min-width: 580px) {
    img {
      transform: none;
    }
  }
</style>
