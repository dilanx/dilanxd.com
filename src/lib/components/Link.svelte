<script lang="ts">
  export let to: string;

  let target: O<string> = undefined;
  let rel: O<string> = undefined;
  if (!to.startsWith('/')) {
    target = '_blank';
    rel = 'noreferrer';
  }
</script>

<a href={to} {target} {rel}>
  <slot />
</a>
