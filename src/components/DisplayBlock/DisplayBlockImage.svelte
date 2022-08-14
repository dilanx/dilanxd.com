<script lang="ts">
  export let src: string;
  export let alt: string;
</script>

<img {src} {alt} />

<style lang="scss">
  img {
    width: auto;
    height: 256px;
    display: block;
    margin: 0 auto;
  }
</style>
