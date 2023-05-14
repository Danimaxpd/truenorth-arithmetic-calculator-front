<template>
  <div>
    <v-form 
      v-model="valid" 
      @submit.prevent="handleSubmit"
    >
      <v-row class="d-flex mb-3">
        <v-col cols="12">
          <v-text-field
            v-model="username"
            :rules="usernameRules"
            variant="outlined"
            color="primary"
            label="Username"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            variant="outlined"
            type="password"
            color="primary"
            label="Password"
          />
        </v-col>
        <v-col
          cols="12"
          class="pt-0"
        >
          <v-btn
            type="submit"
            color="primary"
            size="large"
            block
            flat
          >
            Sign in
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>
<script>
import calculatorApi from '@/services/api-calculator'

export default {
data: () => ({
      valid: false,
      username: '',
      password: '',
      usernameRules: [
        value => {
          if (value) return true

          return 'Name is required.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'Name must be less than 10 characters.'
        },
      ],
      passwordRules: [
        value => {
          if (value) return true

          return 'Password is required.'
        },
        value => {
          if (value?.length >= 3) return true

          return 'Password must be valid.'
        },
      ],
    }),
  methods: {
    async handleSubmit() {
      try {
        await calculatorApi.login(this.username, this.password)
        // do something with the response data
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>