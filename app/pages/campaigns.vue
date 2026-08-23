<script setup lang="ts">
import { ref, computed } from 'vue'
import { campaigns } from '~/data/campaigns'

type CampaignFilter = 'all' | 'active' | 'completed'

const selectedFilter = ref<CampaignFilter>('all')

const filteredCampaigns = computed(() => {
  if (selectedFilter.value === 'all') {
    return campaigns
  }

  return campaigns.filter(
    (campaign) => campaign.status === selectedFilter.value
  )
})
</script>

<template>
  <main class="campaigns-page">
    <section class="campaigns-hero">
      <p class="eyebrow">MAKE A DIFFERENCE</p>

      <h1>Our Campaigns</h1>

      <p>
        Explore the causes we support and find a campaign where you can make
        a meaningful impact.
      </p>
    </section>

    <section class="campaigns-content">
      <div class="filter-bar">
        <button
          class="filter-button"
          :class="{ active: selectedFilter === 'all' }"
          @click="selectedFilter = 'all'"
        >
          All
        </button>

        <button
          class="filter-button"
          :class="{ active: selectedFilter === 'active' }"
          @click="selectedFilter = 'active'"
        >
          Active
        </button>

        <button
          class="filter-button"
          :class="{ active: selectedFilter === 'completed' }"
          @click="selectedFilter = 'completed'"
        >
          Completed
        </button>
      </div>

      <p class="results-count">
        {{ filteredCampaigns.length }}
        campaign{{ filteredCampaigns.length === 1 ? '' : 's' }} found
      </p>

      <div v-if="filteredCampaigns.length > 0" class="campaign-grid">
        <CampaignCard
          v-for="campaign in filteredCampaigns"
          :key="campaign.id"
          :id="campaign.id"
          :title="campaign.title"
          :description="campaign.description"
          :raised="campaign.raised"
          :goal="campaign.goal"
          :status="campaign.status"
        />
      </div>

      <div v-else class="empty-state">
        <h2>No campaigns found</h2>
        <p>
          There are currently no campaigns matching this filter.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.campaigns-page {
  min-height: 100vh;
}

.campaigns-hero {
  padding: 80px 40px;
  text-align: center;
  background: #f5f7f6;
}

.campaigns-hero > p:last-child {
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
}

.eyebrow {
  font-size: 0.85rem;
  font-weight: bold;
  letter-spacing: 2px;
}

h1 {
  margin: 15px 0;
  font-size: 3rem;
}

.campaigns-content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 40px 80px;
}

.filter-bar {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
}

.filter-button {
  padding: 10px 20px;
  border: 1px solid #222;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  font-size: 1rem;
}

.filter-button.active {
  background: #222;
  color: white;
}

.results-count {
  margin-bottom: 30px;
  text-align: center;
}

.campaign-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.empty-state {
  padding: 60px 20px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
}

@media (max-width: 900px) {
  .campaign-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .campaigns-hero {
    padding: 60px 20px;
  }

  .campaigns-content {
    padding: 40px 20px 60px;
  }

  h1 {
    font-size: 2.2rem;
  }

  .filter-bar {
    flex-wrap: wrap;
  }

  .campaign-grid {
    grid-template-columns: 1fr;
  }
}
</style>