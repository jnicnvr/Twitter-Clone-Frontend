<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>      
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="submit">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input v-model.trim="form.email" id="email-address" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            <label class="text-sm text-red-500" v-if="errors.email">{{errors.email[0]}}</label>
          </div>
           <div>
            <label for="name" class="sr-only">Name</label>
            <input v-model.trim="form.name" id="name" name="name" type="text" autocomplete="name" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" />
            <label class="text-sm text-red-500" v-if="errors.name">{{errors.name[0]}}</label>
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input v-model.trim="form.password" id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
            <label class="text-sm text-red-500" v-if="errors.password">{{errors.password[0]}}</label>
          </div>
        </div>
         <div class="text-sm pt-2">
          <p>
            By signing up, you agree to the 
            <a href="#" class="text-blue-500"> Terms of Service</a> and 
            <a href="#" class="text-blue-500">Privacy Policy</a>, including 
            <a href="#" class="text-blue-500">Cookie Use</a>. Others will be able to find you by email or phone number when provided · 
            <a href="#" class="text-blue-500">Privacy Options</a>           
            </p>
        </div>      
        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> -->
            </span>
            Sign Up
          </button>
          <div class="flex justify-center">
            <nuxt-link to="/login" class="font-medium text-indigo-600 hover:text-indigo-500 pr-2">
              Sign In
            </nuxt-link>
           <p>with Forum</p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
   layout: 'landing',
  data(){
    return{
     form: {  
        email: '',
        name:'',
        password: ''
      }
    }
  },
    methods: {
      async submit(){
        try
        {
          await this.$axios.$post('auth/register', this.form)
          await this.$auth.loginWith("laravelJWT", {
            data:{
              email: this.form.email,
              password: this.form.password
            }
          })
          //redirect
          this.$router.push('/discuss')
        }
        catch(error){console.log(error)}
      }
    }
};
</script>