<template>
  <div class="container">
    <h1>The Lastest Posts</h1>
    <div class="create-post">
      <label for="create-post">Say something ...</label>
      <input
        type="text"
        id="create-post"
        v-model="text"
        placeholder="Create a Post"
      />
      <button @click="createPost">AddPost</button>
    </div>
    <hr />
    <p class="error" v-if="error">{{ error }}</p>
    <div class="post-container">
      <div
        class="post"
        v-for="(post, index) in posts"
        :key="post._id"
        :item="post"
        :index="index"
        @dblclick="deletePost(post._id)"
      >
        <p>{{ post.createdAt }}</p>
        <p class="text">{{ post.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from "../PostService";
export default {
  name: "PostComponent",
  data() {
    return {
      posts: [],
      error: "",
      text: "",
    };
  },
  async created() {
    this.posts = await PostService.getPosts();
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
      this.text = "";
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    },
  },
};
</script>

<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
h1 {
  margin: 7px;
}
.create-post {
  margin: 7px 0;
}
.post-container {
  margin-top: 7px;
}
p.error {
  border: 1px solid #ff5bf5;
  background: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}
div.post {
  position: relative;
  border: 1px solid #5db658;
  background: #bcf6b8;
  margin-bottom: 15px;
  text-align: center;
  padding: 25px;
}
div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background: darkgreen;
  color: #fff;
  font-size: 13px;
}
p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
