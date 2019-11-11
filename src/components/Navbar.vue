<template>
    <nav>
        <v-app-bar color="grey darken-4">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase white--text">
                <span class="font-weight-light">Vuetify</span>
                <span class="font-weight-bold">Admin</span>
            </v-toolbar-title>
            <v-spacer />
            <v-layout>
                <v-toolbar-items>
                    <v-card-text>
                        <div class="subheading white--text">{{ date }}</div>
                        <div class="white--text">{{ time }}</div>
                    </v-card-text>
                </v-toolbar-items>
            </v-layout>
            <v-spacer />
            <v-text-field
                class="mx-4"
                flat
                hide-details
                label="Buscar contato"
                prepend-inner-icon="search"
                solo-inverted
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-layout>
                <v-toolbar-items>
                    <v-avatar class="mt-3">
                        <v-img :src="user.avatar"></v-img>
                    </v-avatar>
                    <v-card-text>
                        <div class="subheading white--text">{{ user.name }}</div>
                        <div class="white--text">{{ user.login }}</div>
                    </v-card-text>
                </v-toolbar-items>
            </v-layout>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app clipped class="grey darken-3">
            <v-list v-for="menu in menus" :key="menu.name">
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
        date: '',
        time: '',
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
                    { icon: 'people', text: 'Filas', route: '/' },
                    { icon: 'people', text: 'Campanhas', route: '/' },
                    { icon: 'face', text: 'Agentes', route: '/' },
                ]
            },
            {   
                name: 'Admin',
                links: [
                    { icon: 'face', text: 'Agentes', route: '/' },
                    { icon: 'people', text: 'Filas', route: '/' },
                    { icon: 'people', text: 'Campanhas', route: '/' },
                    { icon: 'public', text: 'Discadores', route: '/' },
                ]
            },
        ],
    }),
    created() {
        setInterval(this.getNow, 1000);
    },
    methods: {
        getNow: function() {
            const today = new Date();
            this.date = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear()
            this.time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        }
    }
}
</script>
