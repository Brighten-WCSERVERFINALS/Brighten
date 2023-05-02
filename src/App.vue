<template>
  <div id="app bg-home">
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active"><router-link to="/" class="nav-link">Home</router-link>
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/about" class="nav-link">About</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/appointment" class="nav-link">Appointment</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link class="nav-link" to="/view">View Clients</router-link></a>
          </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/contacts" class="nav-link">Contacts</router-link></a>
          </li>
      </ul>
    </div>
  </div>
</nav>
  <div class="container mt-5">
      <router-view></router-view>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.bg-home {
  height: 100vh;
  background-image: url("./assets/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  overflow: auto;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

.navbar{
  background-color: #00203A;
}

.navbar-brand, .nav-link{
  color: white;
}
</style>
