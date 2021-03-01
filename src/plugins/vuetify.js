import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: { dark: true },
  

  name: "anime",
  data() {
    return {};
  },
  mounted() {
    const targets = this.$el;
    this
      .$anime
      .timeline()
      .add({
        targets,
        translateX: 250,
        easing: 'easeOutExpo',
      })
      .add({
        targets,
        translateX: 250,
        easing: 'easeOutExpo',
      });
      /* ... etc ... */
  },
  anime: {value: true},
})

