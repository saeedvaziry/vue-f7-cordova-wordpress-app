<template>
  <f7-toolbar tabbar :position="'bottom'">
    <f7-link
      tab-link-active
      text="Home"
      icon-fa="user"
      icon-size="15px"
      @click="$f7router.navigate('/home/')"
    ></f7-link>
    <f7-link
      :class="{'tab-link-active': active === 'categories'}"
      text="Categories"
      icon-fa="list"
      icon-size="15px"
      @click="$f7router.navigate('/categories/')"
    ></f7-link>
  </f7-toolbar>
</template>

<script>
export default {
  name: "tabbar",
  props: ["active"]
};
</script>
