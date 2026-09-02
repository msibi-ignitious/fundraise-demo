<script setup lang="ts">
import { campaigns } from '~/data/campaigns'

const route = useRoute()

const campaignId = Number(route.query.campaign)

const campaign = campaigns.find(
  (item) => item.id === campaignId
)

const selectedAmount = ref<number | null>(null)

const customAmount = ref('')

const errorMessage = ref('')

const presetAmounts = [50, 100, 250, 500]

const amount = computed(() => {
  if (customAmount.value !== '') {
    return Number(customAmount.value)
  }

  return selectedAmount.value
})

const selectAmount = (value: number) => {
  selectedAmount.value = value
  customAmount.value = ''
  errorMessage.value = ''
}

const continueDonation = () => {
  errorMessage.value = ''

  if (amount.value == null) {
    errorMessage.value = 'Please enter a donation amount.'
    return
  }

  if (!Number.isFinite(amount.value)) {
    errorMessage.value = 'Please enter a valid donation amount.'
    return
  }

  if (amount.value <= 0) {
    errorMessage.value = 'Donation amount must be greater than E0.'
    return
  }

  const query = new URLSearchParams({
    amount: String(amount.value),
    ...(campaign ? { campaign: String(campaign.id) } : {})
  })

  navigateTo(`/donate/details?${query.toString()}`)
}
</script>
<template>
  <main class="donation-page">

    <h1>Make a Donation</h1>

    <p>Your contribution can help change lives.</p>

    <!-- Campaign -->
    <div v-if="campaign" class="campaign-info">
      <p>You are supporting:</p>

      <h2>{{ campaign.title }}</h2>

      <p>{{ campaign.description }}</p>
    </div>

    <div v-else class="campaign-info">
      <p>You are making a general donation.</p>
    </div>

    <!-- Donation Form -->
    <form @submit.prevent="continueDonation" novalidate>

      <h2>Choose Donation Amount</h2>

      <!-- Preset amounts -->
      <div class="amount-options">

        <button
          v-for="value in presetAmounts"
          :key="value"
          type="button"
          :class="{ selected: selectedAmount === value }"
          @click="selectAmount(value)"
        >
          E{{ value }}
        </button>

      </div>

      <!-- Custom amount -->
      <div class="custom-amount">

        <label for="amount">
          Or enter your own amount
        </label>

        <input
          id="amount"
          v-model="customAmount"
          type="number"
          min="1"
          placeholder="Enter amount"
          @input="selectedAmount = null"
        />

      </div>

      <!-- Selected amount -->
      <div v-if="amount" class="selected-summary">
        Donation amount:
        <strong>
          E{{ amount.toLocaleString() }}
        </strong>
      </div>
      <p
        v-if="errorMessage"
        class="error-message"
      >
        {{ errorMessage }}
      </p>

      <button
        type="submit"
        class="continue-button"
      >
        Continue
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
.error-message {
  margin-top: 20px;
  padding: 12px;
  border-radius: 6px;
  background: #f8d7da;
  color: #842029;
  font-weight: bold;
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
  margin-top: 40px;
}

.amount-options {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin: 20px 0 30px;
}

.amount-options button {
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
}

.amount-options button.selected {
  background: #222;
  color: white;
  border-color: #222;
}

.custom-amount {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.custom-amount label {
  font-weight: bold;
}

.custom-amount input {
  padding: 13px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.selected-summary {
  margin-top: 25px;
  padding: 15px;
  border-radius: 6px;
  background: #f5f7f6;
}

.continue-button {
  margin-top: 25px;
  padding: 14px 24px;
  border: none;
  border-radius: 6px;
  background: #222;
  color: white;
  cursor: pointer;
  font-weight: bold;
}

@media (max-width: 600px) {
  .amount-options {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>