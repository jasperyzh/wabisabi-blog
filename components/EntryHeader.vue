<template>
  <header class="mb-3">
    <h1>{{ the_content.title }}</h1>

    <p class="text-muted m-0">
      <small>Created at: {{ formatDate(the_content.created_at) }}</small>
    </p>

    <p class="text-muted m-0">
      <small>Updated at: {{ formatDate(the_content.updated_at) }}</small>
    </p>
  </header>
</template>
<script>
export default {
  props: ["the_content"],
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>