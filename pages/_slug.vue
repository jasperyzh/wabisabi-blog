<template>
  <article>
    <div class="container">
      <div class="row">
        <nuxt-content :document="article" />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("blog", params.slug).fetch();

    return { article };
  },
};
</script>