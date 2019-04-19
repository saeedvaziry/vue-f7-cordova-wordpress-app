<template>
  <f7-page name="post">
    <f7-navbar :title="post ? post.title : ''" back-link="Back"></f7-navbar>
    <f7-card class="demo-card-header-pic" outline v-if="post">
      <f7-card-header
        v-if="post.image"
        class="no-border"
        valign="bottom"
        :style="'background-image:url(' + post.image + '); height: 120px'"
      ></f7-card-header>
      <f7-card-content>
        <p class="date">Posted on {{ (new Date(post.date)).toUTCString() }}</p>
        <h1>{{ post.title }}</h1>
        <br>
        <div class="content" v-html="content"></div>
      </f7-card-content>
    </f7-card>
  </f7-page>
</template>

<script>
export default {
  name: "post",
  props: ["post"],
  created() {
    if (this.post) {
      this.$f7.preloader.show();
      window.api
        .call("get", "/wp-json/wp/v2/posts/" + this.post.id + "?_embed")
        .then(({ data }) => {
          this.content = data.content.rendered;
        });
    }
  },
  mounted() {
    document.addEventListener("backbutton", this.onBackKeyDown, false);
  },
  data() {
    return {
      content: null
    };
  },
  methods: {
    onBackKeyDown(e) {
      e.preventDefault();
      this.$f7router.back();
      document.removeEventListener("backbutton", this.onBackKeyDown);
    }
  }
};
</script>
