<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      {{ JSON.stringify(CHANNELS) }}
    </div>
    <ul>
      <li>{{ channel.name }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  async beforeMount () {
    await this.LOAD_CONFIG()
  },
  methods: {
    ...mapActions([
      'LOAD_CONFIG'
    ])
  },
  computed: {
    ...mapGetters(['CHANNELS'])
  }
}
</script>
