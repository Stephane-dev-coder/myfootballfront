<template> 
    <div>
        <v-main>
            <v-container>
                <v-snackbar 
        
                    :timeout="4000"
                    v-model="success"
                    absolute
                    right
                    top
                    color="green"
                    elevation="10"
                    >
                Connexion Etablie
                </v-snackbar>

                <v-snackbar
                    :timeout="4000"
                    v-model="error"
                    absolute
                    right
                    top
                    color="red"
                    elevation="10"
                    >
                Identifiants incorrect
                </v-snackbar>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" lg="4">
                        <v-card elevation="4">
                            <v-card-title class="cyan darken-1">
                                <span class="white--text">Se connecter</span>
                            </v-card-title>
                            <v-form ref="login" lazy-validation v-model="valid">
                                <v-text-field class="mx-6 mt-8" placeholder="Nom Utilisateur" :rules="usernameRules" v-model="username" solo></v-text-field>
                                
                                <v-text-field class="mx-6" placeholder="Mot de passe" :rules="passwordRules" v-model="password" solo type="password"></v-text-field>

                                <v-row class="mx-6">
                                    <v-btn elevation="0" class="my-4" color="primary" text @click="() => this.$router.push('register')">cree un compte</v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn elevation="0" class="my-4" color="success" :disabled="!valid" @click="validate">se connecter</v-btn>
                                </v-row>
                            </v-form>
                            <v-overlay :absolute="true" :value="overlay">
                                <v-progress-circular
                                    indeterminate
                                    size="64"
                                ></v-progress-circular>
                            </v-overlay>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {

    data() {
        return {
            username: '',
            usernameRules: [v => !!v || 'Vous devez inserer un nom d\'utilisateur', v => (v && v.length <= 20) || 'Le nom d\'utilisateur doit etre inferieur a 20 characters'],
            password: '',
            passwordRules: [v => !!v || 'Vous devez inserer un mot de passe'],
            valid: false,
            overlay: false,
            progress: 0,
            success: false,
            error: false,
        }
    },

    mounted() {
        this.valid = false
    },

    
    beforeDestroy () {
      clearInterval(this.interval)
    },

    methods: {
        validate() {

            if(this.valid == true && this.$refs.login.validate()) {
                this.overlay = true

                setTimeout(() => {
                    this.overlay = false
                    this.success = true
                    this.$router.push('/myfootball')
                }, 2000)

                
            } else {
                    this.error = true
            }
        },
        ...mapMutations([
        'login',
        ]),
    }
}
</script>