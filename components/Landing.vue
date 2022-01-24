<template>
  <div class="w-full h-screen flex flex-col md:flex-row">
    <div
      class="bg-white flex flex-col justify-center items-center md:w-5/12 w-full shadow-lg py-36 md:py-0"
    >
      <h1 class="text-3xl font-bold text-blue-500 mb-2">Join the Forum today</h1>
      <div class="w-1/2 text-center">
        <nuxt-link to="/register">
          <button
            class="w-full font-semibold bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-full text-lg focus:outline-none shadow my-1"
          >Sign Up</button>
        </nuxt-link>
        <nuxt-link to="/login">
          <button
            class="w-full font-semibold bg-transparent border border-blue-500 hover:border-transparent text-blue-500 px-3 py-2 rounded-full text-lg focus:outline-none shadow my-1"
          >Sign In</button>
        </nuxt-link>
      </div>
    </div>
    <img
      src="https://images.unsplash.com/photo-1540569876033-6e5d046a1d77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      alt="background"
      class="object-cover object-center h-screen md:w-7/12 w-full"
    />
  </div>
</template>
<script>
export default {
    
};
</script>