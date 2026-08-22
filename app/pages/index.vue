<script setup lang="ts">
import type {Campaign} from '~/types/campaign'

const campaigns: Campaign[] = [
  {
    id: 1,
    title: 'Feed a Family',
    description:
      'Help provide nutritious meals to families facing food insecurity.',
    raised: 12500,
    goal: 20000,
    status: 'active'
  },
  {
    id: 2,
    title: 'Education for All',
    description:
      'Help provide learning resources and opportunities for children.',
    raised: 8000,
    goal: 15000,
    status: 'active'
  },
  {
    id: 3,
    title: 'Clean Water Project',
    description:
      'Help communities gain access to safe and clean drinking water.',
    raised: 18000,
    goal: 25000,
    status: 'active'
  }
]
</script>

<template>
  <div>
    <HeroSection />

    <ImpactStats />

    <section class="featured-campaigns">
      <div class="section-header">
        <p class="eyebrow">FEATURED CAMPAIGNS</p>

        <h2>Support a Cause That Matters</h2>

        <p>
          Discover campaigns that are creating meaningful change and find a
          cause you would like to support.
        </p>
      </div>

      <div class="campaign-grid">
       <CampaignCard
          v-for="campaign in campaigns"
          :key="campaign.id"
          :id="campaign.id"
          :title="campaign.title"
          :description="campaign.description"
          :raised="campaign.raised"
          :goal="campaign.goal"
          :status="campaign.status"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.featured-campaigns {
  padding: 80px 40px;
  background: #f5f7f6;
}

.section-header {
  max-width: 700px;
  margin: 0 auto 50px;
  text-align: center;
}

.eyebrow {
  font-size: 0.85rem;
  font-weight: bold;
  letter-spacing: 2px;
}

.section-header h2 {
  margin: 15px 0;
  font-size: 2.2rem;
}

.section-header p:last-child {
  line-height: 1.6;
}

.campaign-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

@media (max-width: 900px) {
  .campaign-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .campaign-grid {
    grid-template-columns: 1fr;
  }

  .featured-campaigns {
    padding: 60px 20px;
  }
}
</style>