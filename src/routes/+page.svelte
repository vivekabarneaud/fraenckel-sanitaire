<script lang="ts">

import Banner from "../components/Banner.svelte";
import TroubleshootCard from "../components/TroubleshootCard.svelte";
import ProjectsCard from "../components/ProjectsCard.svelte";
import ReviewsCard from "../components/ReviewsCard.svelte";
</script>

<div class="flex flex-col gap-y-8 min-h-screen w-screen bg-backgroundColor">
  <Banner />
  <TroubleshootCard />
  <ProjectsCard />
  <ReviewsCard />
</div>
