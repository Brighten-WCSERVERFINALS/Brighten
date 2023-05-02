<template>
  <div class="home-container picture">
    <img src="../assets/pic.png" height="500px">
    <h1><b>{{ msg }}<br>{{ msg1 }}</b></h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Transform Your Smile, Brighten Your Life',
      msg1:'Welcome to Brighten Dental!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  padding-top: 2%;
  padding-bottom: 2%;
}
.home-container{
  padding-top: 2%;
}
</style>
