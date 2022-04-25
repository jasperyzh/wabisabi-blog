<template>
  <div class="alert alert-primary" role="alert">
    <p class="m-0"><slot name="info-box">default</slot></p>
    <img :src="author.image" />
    <div>
      <h4>Author</h4>
      <p>{{ author.name }}</p>
      <p>{{ author.bio }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
};
</script>