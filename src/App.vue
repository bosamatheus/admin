<template>
  <v-app>
    
    <Navbar />
    <v-content>
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
    //
  }),
};
</script>
