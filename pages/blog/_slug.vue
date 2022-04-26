<template>
  <article>
    <div class="container">
      <div class="row text-center">
        <div class="col-auto mx-auto">
          <EntryHeader :the_content="article"></EntryHeader>
        </div>
      </div>
      <!-- <div class="row">
        <nav class="toc">
          <ul>
            <li
              v-for="link of article.toc"
              :key="link.id"
              :class="{
                'py-2': link.depth === 2,
                'ms-2 pb-2': link.depth === 3,
              }"
            >
              <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </div> -->

      <div class="row my-3">
        <nuxt-content class="col-md-8 mx-auto" :document="article" />
      </div>
      <div class="row">
        <prev-next :prev="prev" :next="next" />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "BlogSlug",
  async asyncData({ $content, params }) {
    const article = await $content("blog", params.slug).fetch();

    const [prev, next] = await $content("blog")
      .only(["title", "slug"])
      .sortBy("created_at", "asc")
      .surround(params.slug)
      .fetch();

    return { article, prev, next };
  },
};
</script>
