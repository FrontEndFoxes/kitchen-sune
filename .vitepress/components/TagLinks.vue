<script setup>
import { useData } from 'vitepress'

const { page } = useData()
</script>

<template>
  <div v-if="page.frontmatter.tags">
    <router-link
      class="tag"
      v-for="tag in page.frontmatter.tags"
      :key="tag"
      :to="{ path: `/tags.html#${tag}`}"
    >
      {{ tag }}
    </router-link>
    <hr/>
  </div>
</template>

<style scoped>
.tag {
  background-color: #ED7351;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  color: white;
}
</style>
