<script setup lang="ts">
import { campaigns } from '~/data/campaigns'

const route = useRoute()

const campaignId = Number(route.params.id)

const campaign = campaigns.find(
  (item) => item.id === campaignId
)

if (!campaign) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Campaign not found'
  })
}

const progress = computed(() => {
  if (campaign.goal === 0) {
    return 0
  }

  return Math.min(
    (campaign.raised / campaign.goal) * 100,
    100
  )
})
</script>

<template>
  <main class="campaign-page">
    <NuxtLink to="/campaigns" class="back-link">
      ← Back to Campaigns
    </NuxtLink>

    <section class="campaign-hero">
      <div class="campaign-image">
        Campaign Image
      </div>

      <div class="campaign-details">
        <p class="status">
          {{ campaign.status }}
        </p>

        <h1>{{ campaign.title }}</h1>

        <p class="description">
          {{ campaign.description }}
        </p>

        <div class="funding-info">
          <div class="amounts">
            <span>
              Raised: <strong>E{{ campaign.raised.toLocaleString() }}</strong>
            </span>

            <span>
              Goal: <strong>E{{ campaign.goal.toLocaleString() }}</strong>
            </span>
          </div>

          <div class="progress-bar">
            <div
              class="progress-fill"
              :style="{ width: `${progress}%` }"
            ></div>
          </div>

          <p class="percentage">
            {{ progress.toFixed(1) }}% funded
          </p>
        </div>

        <NuxtLink to="/donate" class="donate-button">
          Donate to this Campaign
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.campaign-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 40px;
}

.back-link {
  display: inline-block;
  margin-bottom: 30px;
  color: inherit;
  text-decoration: none;
  font-weight: bold;
}

.campaign-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: start;
}

.campaign-image {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e9ecef;
  font-weight: bold;
  border-radius: 8px;
}

.status {
  display: inline-block;
  margin-top: 0;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 1px;
}

h1 {
  font-size: 3rem;
  margin: 15px 0;
}

.description {
  font-size: 1.1rem;
  line-height: 1.7;
}

.funding-info {
  margin-top: 35px;
}

.amounts {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 10px;
}

.progress-bar {
  height: 12px;
  overflow: hidden;
  background: #e5e5e5;
  border-radius: 20px;
}

.progress-fill {
  height: 100%;
  background: #222;
}

.percentage {
  margin-top: 10px;
}

.donate-button {
  display: inline-block;
  margin-top: 20px;
  padding: 14px 24px;
  background: #222;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
}

@media (max-width: 768px) {
  .campaign-page {
    padding: 40px 20px;
  }

  .campaign-hero {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .campaign-image {
    min-height: 250px;
  }

  h1 {
    font-size: 2.2rem;
  }

  .amounts {
    flex-direction: column;
    gap: 8px;
  }
}
</style>