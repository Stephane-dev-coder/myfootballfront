<template> 
    <div>
        <v-navigation-drawer v-model="drawer" clipped right app>
            <v-list dense nav>
                <v-list-item class="px-2">

                    <v-btn
                    icon
                    @click.stop="drawer = !drawer"
                    >
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </v-list-item>
                <v-list-item-group color="primary" :value="activePage">
                    <v-list-item link @click="() => activePage != 0 ? this.$router.push('/myfootball/article') : null">
                        <v-list-item-icon>
                            <v-icon color="green">mdi-email</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content name="article">
                            <v-list-item-title class="green--text">Actualité du sport</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link @click="() => activePage != 2 ? this.$router.push('/myfootball/hist') : null">
                        <v-list-item-icon>
                            <v-icon color="green">mdi-clipboard-text</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content name="hist">
                            <v-list-item-title class="green--text">Histoire du sport</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link @click="() => activePage != 3 ? this.$router.push('/myfootball/regle') : null">
                        <v-list-item-icon>
                            <v-icon color="green">mdi-account-multiple-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content name="regle">
                            <v-list-item-title class="green--text">régles et cathegories sportives</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link @click="() => activePage != 4 ? this.$router.push('/myfootball/coach') : null">
                        <v-list-item-icon>
                            <v-icon color="green">mdi-nature-people</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content name="coach">
                            <v-list-item-title class="green--text">Les entraineurs</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link @click="() => activePage != 5 ? this.$router.push('/myfootball/cdm') : null">
                        <v-list-item-icon>
                            <v-icon color="green">mdi-rss</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content name="cdm">
                            <v-list-item-title class="green--text">Calendrier des matchs</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link @click="() => activePage != 6 ? this.$router.push('/myfootball/lieu') : null">
                        <v-list-item-icon>
                            <v-icon color="green">mdi-account-multiple-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content name="regle">
                            <v-list-item-title class="green--text">Lieu et jours d'entrainement</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link @click="() => activePage != 1 ? this.$router.push('/myfootball/contact') : null">
                        <v-list-item-icon>
                            <v-icon color="green">mdi-check</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content name="competences">
                            <v-list-item-title class="green--text">Formulaire de contact</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <template v-slot:append>
                <div class="pa-2">
                <v-btn color="red" block>
                    <span class="white--text" @click="disconnect">Logout</span>
                </v-btn>
                </div>
            </template>
        </v-navigation-drawer>
        <v-app-bar elevation="2" app clipped-right>
            <h1 class="title" >Myfootball</h1>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-main>
            <router-view></router-view>
        </v-main>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            drawer: false,
        }
    },
    computed: {
        activePage () {
            switch (this.$route.name) {
                case 'article':
                    return 0
                case 'contact':
                    return 1
                case 'hist':
                    return 2
                case 'regle':
                    return 3
                case 'coach':
                    return 4
                case 'cdm':
                    return 5
                case 'lieu':
                    return 6
                default:
                    return 0
            }
        }
    },
    methods: {
        disconnect () {
            this.$router.push('/login')
            this.logout()
        },
        ...mapMutations([
        'logout',
        ]),
    }
}
</script>