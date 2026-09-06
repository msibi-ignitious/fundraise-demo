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
    ...(campaign
      ? { campaign: String(campaign.id) }
      : {})
  })

  navigateTo(`/donate/details?${query.toString()}`)
}
</script>

<template>
  <main class="donation-page">

    <section class="donation-container">

      <!-- Page Header -->
      <div class="donation-header">
        <span class="eyebrow">MAKE AN IMPACT</span>

        <h1>Make a Donation</h1>

        <p>
          Your contribution can help change lives
          and create a better future for communities.
        </p>
      </div>

      <!-- Campaign Information -->
      <div v-if="campaign" class="campaign-box">
        <div>
          <span class="campaign-label">DONATING TO</span>

          <h2>{{ campaign.title }}</h2>

          <p>{{ campaign.description }}</p>
        </div>
      </div>

      <!-- Donation Card -->
      <section class="donation-card">

        <h2>Choose Donation Amount</h2>

        <p class="section-description">
          Select an amount below or enter your own amount.
        </p>

        <!-- Preset Amounts -->
        <div class="amount-options">

          <button
            v-for="preset in presetAmounts"
            :key="preset"
            type="button"
            :class="{ selected: selectedAmount === preset }"
            @click="selectAmount(preset)"
          >
            E{{ preset }}
          </button>

        </div>

        <!-- Custom Amount -->
        <div class="custom-amount">

          <label for="amount">
            Or enter a custom amount
          </label>

          <div class="amount-input">

            <span>E</span>

            <input
              id="amount"
              v-model="customAmount"
              type="number"
              min="1"
              placeholder="Enter amount"
              @input="selectedAmount = null"
            />

          </div>

        </div>

        <!-- Selected Amount -->
        <div
          v-if="amount !== null"
          class="selected-amount"
        >
          <span>Your donation</span>

          <strong>
            E{{ amount }}
          </strong>
        </div>

        <!-- Error -->
        <p
          v-if="errorMessage"
          class="error-message"
        >
          {{ errorMessage }}
        </p>

        <!-- Continue -->
        <form
          @submit.prevent="continueDonation"
          novalidate
        >
          <button
            type="submit"
            class="continue-button"
          >
            Continue to Donor Details
            <span>→</span>
          </button>
        </form>

      </section>

      <!-- Trust Message -->
      <div class="trust-message">
        <span>🔒</span>

        <p>
          Your donation is secure and will be used
          to support communities in need.
        </p>
      </div>

    </section>

  </main>
</template>

<style scoped>
/* ========================================
   DONATION PAGE
======================================== */

.donation-page {
  min-height: calc(100vh - 160px);
  padding: 70px 20px 80px;
  background: #f7f9fc;
}

.donation-container {
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
}


/* ========================================
   HEADER
======================================== */

.donation-header {
  text-align: center;
  margin-bottom: 35px;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 12px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #2563eb;
}

.donation-header h1 {
  margin: 0 0 15px;
  font-size: 2.7rem;
  line-height: 1.15;
  color: #111827;
}

.donation-header p {
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #6b7280;
}


/* ========================================
   CAMPAIGN BOX
======================================== */

.campaign-box {
  margin-bottom: 25px;
  padding: 25px 30px;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  background: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
}

.campaign-label {
  display: block;
  margin-bottom: 7px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #6b7280;
}

.campaign-box h2 {
  margin: 0 0 8px;
  font-size: 1.35rem;
  color: #111827;
}

.campaign-box p {
  margin: 0;
  line-height: 1.6;
  color: #6b7280;
}


/* ========================================
   DONATION CARD
======================================== */

.donation-card {
  padding: 40px;
  border-radius: 18px;
  background: white;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);
}

.donation-card h2 {
  margin: 0 0 8px;
  font-size: 1.6rem;
  color: #111827;
}

.section-description {
  margin: 0 0 25px;
  color: #6b7280;
}


/* ========================================
   AMOUNT BUTTONS
======================================== */

.amount-options {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 30px;
}

.amount-options button {
  padding: 15px 10px;
  border: 2px solid #dbe2ea;
  border-radius: 10px;
  background: white;
  color: #1f2937;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.amount-options button:hover {
  border-color: #2563eb;
  transform: translateY(-2px);
}

.amount-options button.selected {
  border-color: #2563eb;
  background: #2563eb;
  color: white;
}


/* ========================================
   CUSTOM AMOUNT
======================================== */

.custom-amount {
  margin-bottom: 25px;
}

.custom-amount label {
  display: block;
  margin-bottom: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
}

.amount-input {
  display: flex;
  align-items: center;
  border: 2px solid #dbe2ea;
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.2s ease;
}

.amount-input:focus-within {
  border-color: #2563eb;
}

.amount-input span {
  padding-left: 16px;
  font-weight: 700;
  color: #6b7280;
}

.amount-input input {
  width: 100%;
  padding: 14px 16px 14px 8px;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #111827;
}


/* ========================================
   SELECTED AMOUNT
======================================== */

.selected-amount {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 18px 20px;
  border-radius: 10px;
  background: #f3f6fb;
}

.selected-amount span {
  color: #6b7280;
}

.selected-amount strong {
  font-size: 1.4rem;
  color: #111827;
}


/* ========================================
   ERROR
======================================== */

.error-message {
  margin: 0 0 20px;
  padding: 12px 15px;
  border-radius: 8px;
  background: #fef2f2;
  color: #dc2626;
  font-size: 0.9rem;
}


/* ========================================
   CONTINUE BUTTON
======================================== */

.continue-button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 20px;
  border: none;
  border-radius: 10px;
  background: #111827;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.continue-button:hover {
  background: #2563eb;
  transform: translateY(-1px);
}

.continue-button span {
  font-size: 1.2rem;
}


/* ========================================
   TRUST MESSAGE
======================================== */

.trust-message {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 25px;
  color: #6b7280;
}

.trust-message span {
  font-size: 1rem;
}

.trust-message p {
  margin: 0;
  font-size: 0.85rem;
}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {

  .donation-page {
    padding: 45px 15px 60px;
  }

  .donation-header h1 {
    font-size: 2.1rem;
  }

  .donation-card {
    padding: 25px 20px;
  }

  .amount-options {
    grid-template-columns: repeat(2, 1fr);
  }

  .campaign-box {
    padding: 20px;
  }

  .trust-message {
    align-items: flex-start;
  }

}
</style>