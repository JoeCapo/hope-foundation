<script setup>
import { ref } from 'vue';
import axios from 'axios';

const name = ref('');
const email = ref('');
const message = ref('');
let formSubmitted = ref(false);

const submitForm = () => {
  const formData = {
    name: name.value,
    email: email.value,
    message: message.value
  };

  // Make a POST request to your Express backend
  axios.post('http://localhost:3000/api/contact', formData)
      .then(response => {
        // Handle the response, e.g., show a success message
        console.log(response.data.message);
        formSubmitted.value = true;
      })
      .catch(error => {
        // Handle errors, e.g., show an error message
        console.error(error);
      });
};
</script>

<template>
  <div class="background">
    <div class="container p-3">
      <div v-if="formSubmitted" class="success-message">
        <p>Thank you for contacting us!</p>
      </div>

      <form v-else @submit.prevent="submitForm" method="post">
      <div class="form-fields row d-flex flex-column flex-md-row">
        <div class="info col">
          <div class="mb-2">
            <label for="name"
                   class="form-label">Email address</label>
            <input type="text"
                   class="form-control"
                   id="name"
                   v-model="name"
                   placeholder="Name">
            </div>
          <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email"
                     class="form-control"
                     id="email"
                     v-model="email" placeholder="Email">
            </div>
        </div>
        <div class="message col">
          <div class="mb-3">
            <label for="message"
                   class="form-label">Example textarea</label>
            <textarea
                class="form-control"
                id="message"
                v-model="message"
                placeholder="Message"
                rows="4"></textarea>
          </div>
      </div>
      </div>
      <button type="submit" class="btn rounded-pill fs-4">Submit</button>
    </form>
    </div>
  </div>
</template>

<style>
.success-message {
  color: #7119f4;
}
</style>
