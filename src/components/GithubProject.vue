<template lang="pug">

li {{ repo.name }}

</template>

<script>
export default {
  props: {
    repo: {
      name: String
    }
  }
};
</script>
