<template src="./recursos/html/ProfileFormMain.html">
</template>
<script lang="js">
import { mapGetters } from 'vuex'
import Auth from '@/config/auth.js'
import { db } from '@/config/_firebase.js'
import AlertsComponent from '@/components/helpers/Alerts'

export default {
  name: 'ProfileFormMain',
  component: { AlertsComponent },
  data () { // iteramos todas las variables y métodos que
    return {
      userData: {}
      /* usuario: Auth.checkUser(),
      showError: false,
      errorMessage: '',
      errorCode: '',
      // sabemos que es una funcion porque tiene () y siempre va a regresarnos algo
      user: {
        name: '',
        email: '',
        photo: ''
      }
    } */
    }
  },
  created () {
    console.log('Estoy en created')
    // var user = Auth.currentUser
    // this.name = user.displayName
    let usuario = db.auth().currentUser
    this.user.name = usuario.displayName
    this.user.email = usuario.email
    this.user.photo = usuario.photoURL
  },
  mounted () { // el lugar adecuado para ejecutar cualquier funcion preparatoria, como para checar si el usuario esta loggeado, la ubicación, etc.
    console.log('Estoy en mounted')
    // this.usuario = Auth.checkUser()
    // this.login()
    this.getUser()
  },
  methods: {
    name: 'profileMain',
    profile () {
      this.$router.push({ name: 'Profile' })
    },
    getUser () {
      this.userData = Auth.getUser()
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser' // ? Mapeamos nuestros getter registrados y los transformamos en una varible (data) para ser utlizado en nuestro componente
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
//Style, ubicamos el css relacionado a nuestros views y componentes
