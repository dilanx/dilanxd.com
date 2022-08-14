<script lang="ts">
  export let to: string | undefined = undefined;
  export let image: string;
  export let alt: string;
</script>

<a href={to} target="_blank">
  <img src={image} {alt} />
</a>
