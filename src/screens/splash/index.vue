<template>
  <f7-page name="splash"></f7-page>
</template>

<script>
export default {
  name: "splash",
  created() {
    this.$f7.preloader.show();
    setTimeout(function() {
      this.$f7.preloader.hide();
      this.$f7router.navigate("/home/");
    }.bind(this), 1000);
  }
};
</script>
