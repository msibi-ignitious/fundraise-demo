<script setup lang="ts">
defineProps<{
  title: string
  description: string
  goal: string
  raised: string
}>()
</script>

<template>
  <article class="campaign-card">
    <div class="campaign-image">
      Campaign Image
    </div>

    <div class="campaign-content">
      <h3>{{ title }}</h3>

      <p class="description">
        {{ description }}
      </p>

      <div class="campaign-progress">
        <div class="progress-info">
          <span>Raised: {{ raised }}</span>
          <span>Goal: {{ goal }}</span>
        </div>

        <div class="progress-bar">
          <div class="progress-fill"></div>
        </div>
      </div>

      <NuxtLink to="/campaigns" class="campaign-button">
        View Campaign
      </NuxtLink>
    </div>
  </article>
</template>

<style scoped>
.campaign-card {
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 8px;
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

.campaign-content h3 {
  margin-top: 0;
  font-size: 1.4rem;
}

.description {
  line-height: 1.6;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin: 20px 0 8px;
  font-size: 0.9rem;
}

.progress-bar {
  height: 8px;
  overflow: hidden;
  border-radius: 10px;
  background: #e5e5e5;
}

.progress-fill {
  width: 65%;
  height: 100%;
  background: #222;
}

.campaign-button {
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  font-weight: bold;
}
</style>