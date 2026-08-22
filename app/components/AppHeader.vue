<template>
  <header>
    <nav class="navbar">
      <NuxtLink to="/" class="brand">FundRaise Demo</NuxtLink>

      <div class="nav-links">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/campaigns">Campaigns</NuxtLink>
        <NuxtLink to="/donate">Donate</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid #ddd;
}

.brand {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  text-decoration: none;
}
</style>