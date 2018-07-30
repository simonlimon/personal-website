<template lang="pug">
  Layout#app
    Header#header
      Menu(:selectedKeys="currentRoute", mode="horizontal")#nav
        Item(key="/writing")
            router-link(to="/writing") Writing 
        Item(key="/")#main
          router-link(to="/") SPF 
        Item(key="/projects")
          router-link(to="/projects") Projects
    Content
      router-view 
</template>


<script>
import { Layout, Menu, Row, Col, Affix } from "vue-antd-ui";

export default {
  components: {
    Layout,
    Header: Layout.Header,
    Content: Layout.Content,

    Menu,
    Item: Menu.Item,

    Row,
    Col,
    Affix
  },

  computed: {
    currentRoute: function() {
      return [this.$route.path];
    }
  }
};
</script>


<style lang="scss">
#header,
#nav,
#app {
  background-color: white;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 1.1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#header {
  margin: auto;
}
#nav #main {
  font-weight: 900;
  font-size: 1.2rem;
}
</style>
