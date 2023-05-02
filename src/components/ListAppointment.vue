<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped table-full-width">
                <thead class="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="client in Clients" :key="client._id">
                        <td>{{ client.firstname }} {{ client.lastname }}</td>
                        <td>{{ client.email }}</td>
                        <td>{{ client.phone }}</td>
                        <td>{{ new Date(client.date).toLocaleDateString('en-US') }}</td>
                        <td>{{ new Date('1970-01-01T' + client.time).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) }}</td>
                        <td>
                            <router-link :to="{ name: 'edit', params: { id: client._id } }" class="btn btn-success">
                                Edit
                            </router-link>
                            <button @click.prevent="deleteClient(client._id)" class="btn btn-danger">
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            Clients: [],
        };
    },
    created() {
        let apiURL = "http://localhost:4000/api";
        axios
            .get(apiURL)
            .then((res) => {
                this.Clients = res.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    methods: {
        deleteClient(id) {
            let apiURL = `http://localhost:4000/api/delete-client/${id}`;
            let indexOfArrayItem = this.Clients.findIndex((i) => i._id === id);
            if (window.confirm("Do you really want to delete?")) {
                axios
                    .delete(apiURL)
                    .then(() => {
                        this.Clients.splice(indexOfArrayItem, 1);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
    },
};
</script>

<style scoped>
.table-full-width {
  width: 100%;
}

</style>
