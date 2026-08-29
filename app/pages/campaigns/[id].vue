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
  if (campaign.goal <= 0) {
    return 0
  }

  return Math.min(
    Math.round((campaign.raised / campaign.goal) * 100),
    100
  )
})
</script>

<template>
  <main class="campaign-detail">

    <NuxtLink to="/campaigns" class="back-link">
      ← Back to Campaigns
    </NuxtLink>

    <h1>{{ campaign.title }}</h1>

    <p class="status">
      {{ campaign.status }}
    </p>

    <p class="description">
      {{ campaign.description }}
    </p>

    <div class="funding">
      <strong>
        E{{ campaign.raised.toLocaleString() }}
      </strong>

      <span>
        raised of E{{ campaign.goal.toLocaleString() }}
      </span>

      <div class="progress-bar">
        <div
          class="progress-fill"
          :style="{ width: `${progress}%` }"
        ></div>
      </div>

      <p>
        {{ progress }}% funded
      </p>
    </div>

    <NuxtLink
      :to="`/donate?campaign=${campaign.id}`"
      class="donate-button"
    >
      Donate to this Campaign
    </NuxtLink>

  </main>
</template>

<style scoped>
.campaign-detail {
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 40px;
}

.back-link {
  display: inline-block;
  margin-bottom: 30px;
  text-decoration: none;
  color: inherit;
  font-weight: bold;
}

h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.status {
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.description {
  max-width: 700px;
  line-height: 1.7;
  font-size: 1.1rem;
}

.funding {
  max-width: 500px;
  margin-top: 30px;
}

.funding strong {
  margin-right: 8px;
}

.progress-bar {
  height: 10px;
  margin-top: 15px;
  overflow: hidden;
  border-radius: 20px;
  background: #e5e5e5;
}

.progress-fill {
  height: 100%;
  background: #222;
}

.donate-button {
  display: inline-block;
  margin-top: 30px;
  padding: 14px 24px;
  border-radius: 6px;
  background: #222;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

@media (max-width: 600px) {
  .campaign-detail {
    padding: 40px 20px;
  }

  h1 {
    font-size: 2.2rem;
  }
}
</style>