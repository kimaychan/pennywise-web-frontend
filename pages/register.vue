<script lang="ts" setup>
const email = ref('')
const password = ref('')

function submit () {
  // TODO
  console.log('hello')
}
</script>

<template>
  <section class="registration-page">
    <div class="visual d-none d-md-flex">
      <div class="hero-text">
        <h1>Let's get you setup</h1>
        <h2>It should only take a couple minutes</h2>
      </div>
    </div>
    <div class="registration-container">
      <v-form class="registration-form" @submit.prevent="submit">
        <v-responsive
          class="mx-auto"
          max-width="450"
        >
          <v-text-field label="Email" type="email" v-model="email" required></v-text-field>
          <v-text-field label="Password" type="password" v-model="password" required></v-text-field>
          <v-btn type="submit" variant="tonal">Submit</v-btn>

        </v-responsive>
      </v-form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.registration-page {
  display: flex;
  height: 100%;
  .visual {
    width: 900px;
    background: $picton-blue;
    display: flex;
    justify-content: center;
    align-items: center;
    h1, h2 {
      color: white;
    }
    h1 {
      font-size: 40px;
    }
  }
  .registration-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $snow;
    padding: 20px;
  }
  .registration-form {
    width: 450px;
    button {
      float: right;
    }
  }
}
</style>
