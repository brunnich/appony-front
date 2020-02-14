<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="$store.state.msgValue"/>
    <button class="button" @click="changeMsg()">Change MSG</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    changeMsg() {
      console.log("test");
      this.$store.dispatch('updateMessage', "Test");
    }
  }
}
</script>
