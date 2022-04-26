<template>
  <main class="align-self-center text-center">
    <div class="container">
      <div class="row my-3">
        <div class="col-md-6 mx-auto">
          <h2 class="h5">Latest sketch</h2>
          <component :is="sketches[0].slug"></component>
          <hr class="w-25 mx-auto my-3" />
        </div>
      </div>
      <div class="row my-3">
        <div class="col-md-6 mx-auto">
          <h2 class="h5">Sketches</h2>
          <ul class="list-unstyled">
            <li v-for="sketch of sketches" :key="sketch.slug">
              <NuxtLink
                :to="{ name: 'sketch-slug', params: { slug: sketch.slug } }"
              >
                {{ sketch.title }}
              </NuxtLink>
            </li>
          </ul>
          <hr class="w-25 mx-auto my-3" />
        </div>
      </div>
      <div class="row my-3">
        <div class="col-md-6 mx-auto">
          <h2 class="h5">Posts</h2>
          <ul class="list-unstyled">
            <li v-for="article of articles" :key="article.slug">
              <NuxtLink
                :to="{ name: 'blog-slug', params: { slug: article.slug } }"
              >
                {{ article.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Homepage",

  async asyncData({ $content, params }) {
    const sketches = await $content("sketch")
      .sortBy("created_at", "desc")
      .fetch();

    const articles = await $content("blog")
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("created_at", "asc")
      .fetch();
    return {
      sketches,
      articles,
    };
  },
};
</script>
