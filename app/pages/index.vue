<template>
  <div>
    <HeroSection />

    <ImpactStats />

    <section class="featured-campaigns">
      <div class="section-header">
        <p class="eyebrow">FEATURED CAMPAIGNS</p>
        <h2>Support a Cause That Matters</h2>
        <p>
          Discover campaigns that are creating meaningful change and find a
          cause you would like to support.
        </p>
      </div>

      <div class="campaign-grid">
        <CampaignCard
          title="Feed a Family"
          description="Help provide nutritious meals to families facing food insecurity."
          raised="E12,500"
          goal="E20,000"
        />

        <CampaignCard
          title="Education for All"
          description="Help provide learning resources and opportunities for children."
          raised="E8,000"
          goal="E15,000"
        />

        <CampaignCard
          title="Clean Water Project"
          description="Help communities gain access to safe and clean drinking water."
          raised="E18,000"
          goal="E25,000"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.featured-campaigns {
  padding: 80px 40px;
  background: #f5f7f6;
}

.section-header {
  max-width: 700px;
  margin: 0 auto 50px;
  text-align: center;
}

.eyebrow {
  font-size: 0.85rem;
  font-weight: bold;
  letter-spacing: 2px;
}

.section-header h2 {
  margin: 15px 0;
  font-size: 2.2rem;
}

.section-header p:last-child {
  line-height: 1.6;
}

.campaign-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
</style>