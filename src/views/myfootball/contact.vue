<template>
    <v-container>
        <h1 class="title text-center my-10">Formulaire de contact</h1>
      <v-row><v-col>
         <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Nom"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

        <v-textarea
          name="input-7-1"
          label=""
          value="Ecrivez ici..."
          hint="Hint text"
        ></v-textarea>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'Vous devez accepter de continuer!']"
      label="Êtes-vous d'accord?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="envoyé"
    >
      Valider
    </v-btn>



  </v-form></v-col></v-row>






    </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Le nom est requis',
        v => (v && v.length <= 10) || 'Le nom doit comporter moins de 10 caractères',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail est requis',
        v => /.+@.+\..+/.test(v) || 'E-mail non valide',
      ],
      select: null,
 
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
    },
  }
</script>