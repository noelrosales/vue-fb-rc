<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p v-for="channel in channels" :key="channel.id">{{ channel.name }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'about',
  computed: {
    ...mapGetters({
      channels: 'CHANNELS'
    })
  }
}
</script>
