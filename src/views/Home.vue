<template lang="pug">

div.home
  Row(type="flex", justify="center")
    Col(:span="11")#hello
      p#hello Hello, there! 
      img(src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/12717498_1016833525037503_5767685636819260516_n.jpg?_nc_cat=0&_nc_log=1&oh=8c03dc5743b21a51b9fec6b25b2f6dfc&oe=5C118315")#me
  Row(type="flex", justify="center")
    div#text-wrapper 
      p
        :markdown-it
          I'm **Simon Posada Fishman**. I enjoy building things using code 👨‍💻 
          
          Currently finishing my Computer Science degree at [Pomona College](https://www.pomona.edu) 🎓

          I'm mostly interested in *web development*, *embedded systems* and *data analysis*. 

          We are what we ~~eat~~ read. Here's a list of things I enjoy consuming 🙃:
          
          Radiolab, Axios Login, Stratechery, The Download

</template>

<script>
import { Row, Col } from "vue-antd-ui";
export default {
  components: { Row, Col }
};
</script>

<style scoped>
img#me {
  max-width: 100%;
  max-height: 100%;
  border-radius: 100%;
}

#hello {
  max-width: 200px;
  text-align: center;
  font-weight: bold;
}

#text-wrapper {
  display: inline-block;
  margin: 10px 30px;
  text-align: center;
}

ul {
  list-style: none;
}
</style>
