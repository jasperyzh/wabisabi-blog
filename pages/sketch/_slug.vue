<template>
  <article>
    <div class="container">
      <div class="row text-center">
        <div class="col mx-auto">
          <EntryHeader :the_content="the_content"></EntryHeader>
          <!-- <header class="mb-3">
            <h1>{{ the_content.title }}</h1>

            <p class="text-muted m-0">
              <small>Created at: {{ formatDate(the_content.createdAt) }}</small>
            </p>

            <p class="text-muted m-0">
              <small>Updated at: {{ formatDate(the_content.updatedAt) }}</small>
            </p>
          </header> -->

          <component :is="params.slug"></component>

          <nuxt-content class="col-md-8 mx-auto" :document="the_content" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import EntryHeader from "../../components/EntryHeader.vue";
export default {
    head() {
        return {
            title: this.the_content.title,
            description: this.the_content.description,
            script: [
                {
                    hid: "p5js",
                    src: "https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js",
                    defer: true,
                    callback: () => {
                        this.isCanvasLoaded = true;
                    },
                },
            ],
        };
    },
    async asyncData({ $content, params }) {
        const the_content = await $content("sketch", params.slug).fetch();
        //   .only(["title", "slug"])
        //   .sortBy("createdAt", "asc")
        //   .surround("params.slug")
        // .where({ title: "helloworld" })
        // .fetch();
        // const [prev, next] = await $content("blog")
        //   .only(["title", "slug"])
        //   .sortBy("createdAt", "asc")
        //   .surround(params.slug)
        //   .fetch();
        return { the_content, params /* , prev, next */ };
    },
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleDateString("en", options);
        },
        // https://gist.github.com/honzabilek4/9498a71e6e3770b7d1142ffed3974fbe
        /* checkIfComponentExists() {
          const keys = Object.keys(this.$options.components);
          const names = keys.map((key) => {
            const component = this.$options.components[key];
            let name = "";
            if (component) {
              name = component.name;
            }
            return name;
          });
          return names.includes(this.contentComponent);
        }, */
    },
    components: { EntryHeader }
};
</script>
