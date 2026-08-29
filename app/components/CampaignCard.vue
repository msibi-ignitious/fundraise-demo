<script setup lang="ts">
const props = defineProps<{
  id: number
  title: string
  description: string
  goal: number
  raised: number
  status: 'active' | 'completed' | 'draft'
}>()

const progress = computed(() => {
  if (props.goal <= 0) {
    return 0
  }

  return Math.min(
    Math.round((props.raised / props.goal) * 100),
    100
  )
})
</script>

<template>
  <article class="campaign-card">
    <div class="campaign-image">
      <span>{{ title }}</span>
    </div>

    <div class="campaign-content">
      <div class="campaign-status">
        {{ status }}
      </div>

      <h2>{{ title }}</h2>

      <p class="description">
        {{ description }}
      </p>

      <div class="funding">
        <div class="funding-values">
          <strong>
            E{{ raised.toLocaleString() }}
          </strong>

          <span>
            of E{{ goal.toLocaleString() }}
          </span>
        </div>

        <div class="progress-bar">
          <div
            class="progress-fill"
            :style="{ width: `${progress}%` }"
          ></div>
        </div>

        <p class="progress-text">
          {{ progress }}% funded
        </p>
      </div>

      <NuxtLink
        :to="`/campaigns/${id}`"
        class="campaign-button"
      >
        View Campaign
      </NuxtLink>
    </div>
  </article>
</template>

<style scoped>
.campaign-card {
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: white;
}

.campaign-image {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e9ecef;
  font-weight: bold;
}

.campaign-content {
  padding: 24px;
}

.campaign-status {
  display: inline-block;
  margin-bottom: 10px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.campaign-content h2 {
  margin: 0 0 12px;
  font-size: 1.4rem;
}

.description {
  line-height: 1.6;
}

.funding {
  margin-top: 24px;
}

.funding-values {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 8px;
}

.progress-bar {
  height: 8px;
  overflow: hidden;
  border-radius: 20px;
  background: #e5e5e5;
}

.progress-fill {
  height: 100%;
  background: #222;
}

.progress-text {
  margin: 8px 0 0;
  font-size: 0.85rem;
}

.campaign-button {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 18px;
  border-radius: 6px;
  background: #222;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

@media (max-width: 600px) {
  .campaign-content {
    padding: 20px;
  }
}
</style>