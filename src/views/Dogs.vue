<template>
  <div class="">
    <h1>Dogs for adoption</h1>
    Total dogs: {{getAllDogs.length}}
    <b-table striped hover :items="dogs">
      <template v-slot:cell(name)="data">
        <router-link :to="`/pet/dogs/${data.index}`">{{ data.value }}</router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'getAllDogs'
    ]),
    ...mapState([
      'dogs'
    ])
  },
}
</script>
