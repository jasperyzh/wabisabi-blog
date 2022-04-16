<template>
  <div class="wabisabi">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">
html,
body,
#__nuxt,
#__layout,
.wabisabi {
  min-height: 100%;
  height: 100%;
}
.wabisabi {
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 1rem;
}

footer {
  grid-row: 3/4;
}
</style>