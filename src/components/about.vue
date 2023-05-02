<template>
    <div class="hello">
      <h1><b>{{ msg }}<img src="../assets/home1.png" height="100px"></b></h1><br>
      <h3>At Brighten, we believe that everyone deserves a bright, healthy smile, and we're dedicated to helping you achieve just that.</h3><br>
      <h3>Our About page explains why we chose the name Brighten for our dental website. "Brighten" reflects our commitment to providing top-quality dental services that help brighten our patients' smiles and improve their overall oral health. We believe that a healthy, beautiful smile can have a positive impact on a person's confidence and well-being. That's why we're dedicated to offering personalized, compassionate care to every patient who walks through our doors.</h3>
    </div>
  </template>
  
  <script>
  export default {
    name: 'about',
    data () {
      return {
        msg: 'Welcome to Brighten, your premier destination for quality dental care.'
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
.hello{
  padding-top: 15%;
}
  </style>
  