<template>
    <nav>
        <v-toolbar dark app>
            <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase white--text">
                <span class="font-weight-light">Vuetify</span>
                <span>Admin</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="grey darken-4">
                <span>Sair</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer app v-model="drawer" class="grey darken-2">
            <p>Test</p>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data: () => ({
        drawer: false
    })
}
</script>
