<script setup lang="ts">
import { campaigns } from '~/data/campaigns'

const route = useRoute()

const campaignId = Number(route.query.campaign)

const campaign = campaigns.find(
  (item) => item.id === campaignId
)
</script>

<template>
  <main class="donation-page">
    <h1>Make a Donation</h1>

    <p>Your contribution can help change lives.</p>

    <div v-if="campaign" class="campaign-info">
      <p>You are supporting:</p>
      <h2>{{ campaign.title }}</h2>
      <p>{{ campaign.description }}</p>
    </div>

    <div v-else class="campaign-info">
      <p>You are making a general donation.</p>
    </div>

    <form>
      <label for="amount">Donation Amount</label>

      <input
        id="amount"
        type="number"
        min="1"
        placeholder="Enter donation amount"
      />

      <br><br>

      <button type="submit">
        Continue to Payment
      </button>
    </form>
  </main>
</template>

<style scoped>
.donation-page {
  max-width: 700px;
  margin: 0 auto;
  padding: 60px 20px;
}

.campaign-info {
  margin: 30px 0;
  padding: 20px;
  border-radius: 8px;
  background: #f5f7f6;
}

.campaign-info h2 {
  margin: 5px 0 10px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-weight: bold;
}

input {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

button {
  width: fit-content;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  background: #222;
  color: white;
  cursor: pointer;
  font-weight: bold;
}
</style>