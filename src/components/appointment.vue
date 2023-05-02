<template>
  <div class="row justify-content-center">
      <div class="col-md-6">
          <h3 class="text-center">Add New Clients</h3>
          <form @submit.prevent="handleSubmitForm">
              <div class="form-group">
                  <label>First Name</label>
                  <input type="text" class="form-control" v-model="client.firstname" required>
              </div>
              <div class="form-group">
                  <label>Last Name</label>
                  <input type="text" class="form-control" v-model="client.lastname" required>
              </div>
              <div class="form-group">
                  <label>Email</label>
                  <input type="email" class="form-control" v-model="client.email" required>
              </div>
              <div class="form-group">
                  <label>Phone</label>
                  <input type="text" class="form-control" v-model="client.phone" required>
              </div>
              <div class="form-group">
                  <label>Date</label>
                  <input type="date" class="form-control" v-model="client.date" required>
              </div>
              <div class="form-group">
                  <label>Time</label>
                  <input type="time" class="form-control" v-model="client.time" required>
              </div>
              <div class="form-group">
                  <button class="btn btn-block">Create</button>
              </div>
          </form>
      </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
     name: 'appointment',
     data() {
  return {
    client: {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      place: ''
    },
  };
},
      methods: {
          handleSubmitForm() {
              let apiURL = 'http://localhost:4000/api/create-client';
              
              axios.post(apiURL, this.client).then(() => {
                this.$router.push('/view')
                this.client = {
                  firstname: '',
                  lastname: '',
                  email: '',
                  phone: '',
                  date: '',
                  time: '',
                  place: ''
                }
              }).catch(error => {
                  console.log(error)
              });
          }
      }
  }
</script>

<style>
.btn{
    background-color: orange;
}

.btn:hover{
    background-color: orange;
}
</style>
