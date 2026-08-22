<template>
  <section class="hero">
    <div class="hero-content">
      <p class="eyebrow">MAKE A DIFFERENCE TODAY</p>

      <h1>
        Helping Communities.
        <span>Changing Lives.</span>
      </h1>

      <p class="hero-description">
        Together, we can support meaningful projects, empower communities,
        and create lasting change.
      </p>

      <div class="hero-actions">
        <NuxtLink to="/campaigns" class="primary-button">
          Explore Campaigns
        </NuxtLink>

        <NuxtLink to="/donate" class="secondary-button">
          Donate Now
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 500px;
  display: flex;
  align-items: center;
  padding: 80px 40px;
  background: #f5f7f6;
}

.hero-content {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.eyebrow {
  font-size: 0.85rem;
  font-weight: bold;
  letter-spacing: 2px;
}

h1 {
  font-size: 3.5rem;
  margin: 20px 0;
}

h1 span {
  display: block;
}

.hero-description {
  max-width: 600px;
  margin: 0 auto 30px;
  font-size: 1.1rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.primary-button,
.secondary-button {
  display: inline-block;
  padding: 14px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
}

.primary-button {
  background: #222;
  color: white;
}

.secondary-button {
  border: 1px solid #222;
  color: #222;
}
</style>