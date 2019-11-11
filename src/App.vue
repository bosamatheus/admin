<template>
  <v-app>
    
    <v-content>
      <Navbar />
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar },
  data: () => ({
  
  }),
  created () {
    this.$vuetify.theme.dark = true
  },
};
</script>
