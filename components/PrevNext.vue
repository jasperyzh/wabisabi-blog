<template>
  <div class="d-flex">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'slug', params: { slug: prev.slug } }"
      class="btn btn-secondary d-inline-block mx-auto ms-0"
    >
      {{ prev.title }}
    </NuxtLink>

    <NuxtLink
      v-if="next"
      :to="{ name: 'slug', params: { slug: next.slug } }"
      class="btn btn-secondary d-inline-block mx-auto me-0"
    >
      {{ next.title }}
    </NuxtLink>
  </div>
</template>
<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
};
</script>