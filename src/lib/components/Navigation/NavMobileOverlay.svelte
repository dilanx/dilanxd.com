<div>
  <slot />
</div>

<style lang="scss">
  @use '../../theme';

  div {
    height: 0%;
    width: 100%;
    position: fixed;
    margin: 0;
    z-index: 100;
    top: theme.$nav-h-big;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000000e6;
    overflow-y: hidden;
    transition: height 0.5s ease-in-out;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
</style>
