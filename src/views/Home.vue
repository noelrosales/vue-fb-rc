<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul v-if="channels">
      <li v-for="channel in channels" :key="channel.id">{{ channel.name }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  async beforeMount () {
    indexedDB.deleteDatabase('firebase_remote_config')
    await this.LOAD_CONFIG()
  },
  methods: {
    ...mapActions([
      'LOAD_CONFIG',
      'CLEAR_CONFIG'
    ])
  },
  computed: {
    ...mapGetters({
      channels: 'CHANNELS'
    })
  }
}
</script>
