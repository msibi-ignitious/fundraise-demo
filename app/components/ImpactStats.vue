<template>
  <section class="impact">
    <div class="impact-header">
      <p class="eyebrow">OUR IMPACT</p>
      <h2>Every Contribution Makes a Difference</h2>
      <p>
        Together with our supporters, we are working to create meaningful
        change in communities.
      </p>
    </div>

    <div class="stats">
      <div class="stat-card">
        <h3>1,250+</h3>
        <p>Lives Impacted</p>
      </div>

      <div class="stat-card">
        <h3>24</h3>
        <p>Active Projects</p>
      </div>

      <div class="stat-card">
        <h3>E50,000+</h3>
        <p>Funds Raised</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.impact {
  padding: 80px 40px;
}

.impact-header {
  max-width: 700px;
  margin: 0 auto 50px;
  text-align: center;
}

.eyebrow {
  font-size: 0.85rem;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

h2 {
  font-size: 2.2rem;
  margin-bottom: 15px;
}

.impact-header p:last-child {
  line-height: 1.6;
}

.stats {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.stat-card {
  padding: 35px 20px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.stat-card h3 {
  font-size: 2.2rem;
  margin: 0 0 10px;
}

.stat-card p {
  margin: 0;
}
</style>