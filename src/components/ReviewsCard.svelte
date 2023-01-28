<script lang="ts">
import { mockReviews } from "../../static/mocks/mockReviews.js";
</script>

<div class="flex justify-center h-96 w-full bg-darkBlue shadow-xl text-white">
  <div class="flex flex-col p-8 gap-y-6">
    <h3 class="text-4xl">Ils nous ont fait confiance !</h3>
    {#each mockReviews as review}

    {/each}
  </div>
</div>