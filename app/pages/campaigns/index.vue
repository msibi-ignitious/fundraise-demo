<script setup lang="ts">
import { campaigns } from '~/data/campaigns'
</script>

<template>
  <main class="campaigns-page">
    <section class="campaigns-header">
      <p class="eyebrow">MAKE A DIFFERENCE</p>

      <h1>Our Campaigns</h1>

      <p>
        Support a cause and help create meaningful change.
      </p>
    </section>

    <section class="campaigns-list">
      <CampaignCard
        v-for="campaign in campaigns"
        :key="campaign.id"
        :id="campaign.id"
        :title="campaign.title"
        :description="campaign.description"
        :goal="campaign.goal"
        :raised="campaign.raised"
        :status="campaign.status"
      />
    </section>
  </main>
</template>

<style scoped>
.campaigns-page {
  min-height: 100vh;
}

.campaigns-header {
  padding: 80px 20px;
  text-align: center;
  background: #f5f7f6;
}

.eyebrow {
  margin: 0 0 10px;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 2px;
}

.campaigns-header h1 {
  margin: 0 0 15px;
  font-size: 3rem;
}

.campaigns-header p:last-child {
  line-height: 1.6;
}

.campaigns-list {
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 40px 80px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

@media (max-width: 900px) {
  .campaigns-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .campaigns-header {
    padding: 60px 20px;
  }

  .campaigns-header h1 {
    font-size: 2.2rem;
  }

  .campaigns-list {
    grid-template-columns: 1fr;
    padding: 40px 20px 60px;
  }
}
</style>