<script lang="ts">
  import { linkAttributes } from '$lib/common';

  export let to: string;

  const { href, target, rel } = linkAttributes(to);
</script>

<a {href} {target} {rel}>
  <slot />
</a>
