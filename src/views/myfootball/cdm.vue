<template>
    <v-container>
        <h1 class="title text-center my-10">Calendrier des matchs</h1>
        <v-row align="start" justify="center">
            <v-col cols="12" sm="8" md="6" lg="3">
                <v-card>
                    <v-img src="https://images.unsplash.com/photo-1434648957308-5e6a859697e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"></v-img>
                </v-card>
            </v-col>
             <v-card>
    <v-card-title>
      Calendier des matchs
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="rechercher une equipe"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="liste"
      :items="equipe"
      :search="search"
    ></v-data-table>
  </v-card>

                    <v-btn color="red" text @click="flipboardLink">Calendrier complet </v-btn>
                </v-row>
        
    
    </v-container>
</template>

<script>
export default {
    data(){
        return {liste: [{text : "equipe à domicile",value:"A"},{text : "equipe à l'exterieur",value:"B"},{text : "Date",value:"date"}],
        equipe: [{A : "PSG",B : "TFC", date : "1er janvier 2021"},{A : "TFC",B : "PSG", date : "5 janvier 2021"},{A : "OL",B : "PSG", date : "10 janvier 2021"},{A : "PSG",B : "OL", date : "9 janvier 2021"},{A : "OM",B : "PSG", date : "7 fevrier 2021"},{A : "PSG",B : "OM", date : "13 septembre 2020"}],search: '',
        }

    },
    methods: {
        flipboardLink() {
            window.open('https://www.google.com/search?q=calendrier+des+match+de+la+ligue+1&oq=calendrier+des+match+de+la+ligue+1&aqs=chrome..69i57.6510j0j1&sourceid=chrome&ie=UTF-8#sie=lg;/g/11fs941p8w;2;/m/044hxl;mt;fp;1;;')
        }
    }
}
</script>