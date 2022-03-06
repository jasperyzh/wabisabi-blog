<template>
  <main>
    <div class="container">
      <div class="row my-5">
        <div
          class="card mb-3"
          style="max-width: 540px"
          v-for="article of articles"
          :key="article.slug"
        >
          <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  :src="require(`~/assets/resources/${article.img}`)"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ article.title }}</h5>
                  <p class="card-text">
                    {{ article.description }}
                  </p>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
  async asyncData({ $content, params }) {
    const articles = await $content("blog", params.slug)
      .only(["title", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();

    return { articles };
  },
};
</script>
