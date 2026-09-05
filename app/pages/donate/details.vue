<script setup lang="ts">
const route = useRoute()

const amount = Number(route.query.amount)

const campaignId = Number(route.query.campaign)
</script>

<template>
  <main class="details-page">

    <h1>Donor Details</h1>

    <p>
      Please provide your details to continue with your donation.
    </p>

    <div class="donation-summary">
      <p>
        Donation amount:
        <strong>E{{ amount.toLocaleString() }}</strong>
      </p>

      <p>
        Campaign:
        <strong>#{{ campaignId }}</strong>
      </p>
    </div>

    <form>

      <div class="form-group">
        <label for="firstName">
          First Name
        </label>

        <input
          id="firstName"
          type="text"
          placeholder="Enter your first name"
        />
      </div>

      <div class="form-group">
        <label for="surname">
          Surname
        </label>

        <input
          id="surname"
          type="text"
          placeholder="Enter your surname"
        />
      </div>

      <div class="form-group">
        <label for="email">
          Email Address
        </label>

        <input
          id="email"
          type="email"
          placeholder="Enter your email address"
        />
      </div>

      <div class="form-group">
        <label for="phone">
          Phone Number
        </label>

        <input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
        />
      </div>

      <div class="form-group">
        <label for="message">
          Message (Optional)
        </label>

        <textarea
          id="message"
          rows="4"
          placeholder="Leave a message"
        ></textarea>
      </div>

      <label class="anonymous-option">
        <input
          type="checkbox"
        />

        Make my donation anonymous
      </label>

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
.details-page {
  max-width: 700px;
  margin: 0 auto;
  padding: 60px 20px;
}

h1 {
  margin-bottom: 10px;
}

.donation-summary {
  margin: 30px 0;
  padding: 20px;
  border-radius: 8px;
  background: #f5f7f6;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.form-group label {
  font-weight: bold;
}

input,
textarea {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
}

textarea {
  resize: vertical;
}

.anonymous-option {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px 0;
}

.anonymous-option input {
  width: auto;
}

.continue-button {
  padding: 14px 24px;
  border: none;
  border-radius: 6px;
  background: #222;
  color: white;
  cursor: pointer;
  font-weight: bold;
}
</style>