<template>
    <nav>
        <v-app-bar color="grey darken-4">
            <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase white--text">
                <span class="font-weight-light">Vuetify</span>
                <span class="font-weight-bold">Admin</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="5" md="3">
                <v-text-field class="mt-5" color="white" background-color="grey darken-2" append-icon="search" placeholder="Buscar contato" ></v-text-field>
            </v-col>
            <v-spacer></v-spacer>
            <v-avatar>
                <v-img :src="user.avatar"></v-img>
            </v-avatar>
            <label class="white--text">{{ user.name }}</label>
            <label class="white--text">{{ user.login }}</label>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class="grey darken-3">
            <v-list dense v-for="menu in menus" :key="menu.name">
                <v-subheader class="text-uppercase font-weight-bold">{{ menu.name }}</v-subheader>
                <v-list-item-group v-model="menu.links">
                    <v-list-item v-for="link in menu.links" :key="link.text" router :to="link.route">
                        <v-list-item-action>
                            <v-icon class="white--text">{{ link.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
        user: {
            name: 'Joaquin Phoenix',
            login: 'joker',
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        },
        menus: [
            {   
                name: 'Dashboard',
                links: [
                    { icon: 'dashboard', text: 'Atendentes', route: '/dashboard' },
                    { icon: 'dashboard', text: 'Geral', route: '/dashboard' },
                    { icon: 'dashboard', text: 'Filas Principais', route: '/dashboard' },
                ]
            },
            {   
                name: 'Painel',
                links: [
                    { icon: 'people', text: 'Filas', route: '/painel' },
                    { icon: 'people', text: 'Campanhas', route: '/painel' },
                    { icon: 'face', text: 'Agentes', route: '/painel' },
                ]
            },
            {   
                name: 'Admin',
                links: [
                    { icon: 'face', text: 'Agentes', route: '/admin' },
                    { icon: 'people', text: 'Filas', route: '/admin' },
                    { icon: 'people', text: 'Campanhas', route: '/admin' },
                    { icon: 'public', text: 'Discadores', route: '/admin' },
                ]
            },
        ],
    })
}
</script>
