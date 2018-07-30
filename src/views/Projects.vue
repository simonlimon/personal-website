<template lang="pug">

Row.projects(type="flex" justify="center")
  Col(:span="6")
    ul.project-list
      GithubProject(v-for="repo in repos", :repo="repo", :key="repo.id")
      
</template>


<script>
import GithubProject from "@/components/GithubProject";
import { Row, Col } from "vue-antd-ui";

import axios from "axios";

export default {
  components: {
    GithubProject,
    Row,
    Col
  },

  data() {
    return {
      repos: []
    };
  },

  mounted() {
    axios.get("https://api.github.com/users/simonlimon/repos").then(res => {
      this.repos = res.data;
    });
  }
};
</script>
