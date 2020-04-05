<template>
  <div>
    <h1>Cats for adoption</h1>
    Total Cats: {{getAllCats.length}}
    <b-table striped hover :items="cats">
        <template v-slot:cell(name)="data">
          <router-link :to="`/pet/cats/${data.index}`">{{ data.value }}</router-link>
        </template>
    </b-table>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return { }
  },
  computed: {
    ...mapGetters([
      'getAllCats'
    ]),
    ...mapState([
      'cats'
    ])
  }
}
</script>
