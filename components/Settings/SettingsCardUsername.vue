<template>
<div>
 <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
    <div class="overflow-hidden shadow-sm bg-white rounded-md  border border-gray-200">
      <div class="flex flex-col p-4">
        <div>
          <label for="yourusername" class="font-semibold text-2xl">Your Username</label>
          <p class="text-sm mt-6">This is your URL namespace within Forum.</p>
        </div>
        <div class="flex flex-wrap items-stretch w-1/2 mb-2 mt-2 relative">
          <div class="flex -mr-px">
            <span
              class="flex items-center leading-normal bg-gray-200 rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm"
            >forum.com/</span>
          </div>
          <input
            type="text"
            class="flex-shrink flex-grow flex-auto leading-normal w-px border h-10 border-grey-light rounded rounded-l-none px-3 relative"
          />
        </div>
      </div>

      <!-- card footer -->
      <div
        class="py-2 px-6 bg-gray-100 border-gray-200 text-right rounded-b-md flex justify-between"
      >
        <!-- button link -->
        <p class="text-sm mt-2">Please use 48 characters at maximum.</p>
        <button
          class="bg-black hover:bg-white hover:text-black text-white font-bold border border-gray-700 rounded shadow-sm text-sm py-2 md:px-6 px-4"          
        >Save</button>
      </div>
    </div>
  </div>

  <!-- Your Name -->
  <div class="max-w-3xl mx-auto sm:px-6 lg:px-8 mt-10">
    <div class="overflow-hidden shadow-sm bg-white rounded-md border border-gray-200">
      <div class="flex flex-col p-4">
        <div>
          <label for="yourusername" class="font-semibold text-2xl">Your Name</label>
          <p class="text-sm mt-6">Please enter your full name, or a display name you are comfortable with.</p>
        </div>
        <div class="flex flex-wrap items-stretch w-1/2 mb-2 mt-2 relative">        
          <input
            type="text"
            class="flex-shrink flex-grow flex-auto leading-normal w-px border h-10 border-grey-light rounded rounded-l-none px-3 relative"
          />
        </div>
      </div>

      <!-- card footer -->
      <div
        class="py-2 px-6 bg-gray-100 border-gray-200 text-right rounded-b-md flex justify-between"
      >
        <!-- button link -->
        <p class="text-sm mt-2">Please use 32 characters at maximum.</p>
        <button
          class="bg-black hover:bg-white hover:text-black text-white font-bold border border-gray-700 rounded shadow-sm text-sm py-2 md:px-6 px-4"         
        >Save</button>
      </div>
    </div>
  </div>

  <!-- Your Email -->
  <div class="max-w-3xl mx-auto sm:px-6 lg:px-8 mt-10">
    <div class="overflow-hidden shadow-sm bg-white rounded-md border border-gray-200">
      <div class="flex flex-col p-4">
        <div>
          <label for="yourusername" class="font-semibold text-2xl">Your Email</label>
          <p class="text-sm mt-6">Please enter the email address you want to use to log in with Forum.</p>
        </div>
        <div class="flex flex-wrap items-stretch w-1/2 mb-2 mt-2 relative">        
          <input
            type="email"
            class="flex-shrink flex-grow flex-auto leading-normal w-px border h-10 border-grey-light rounded rounded-l-none px-3 relative"
          />
        </div>
      </div>

      <!-- card footer -->
      <div
        class="py-2 px-6 bg-gray-100 border-gray-200 text-right rounded-b-md flex justify-between"
      >
        <!-- button link -->
        <p class="text-sm mt-2">We will email you to verify the change.</p>
        <button
          class="cursor-not-allowed bg-black hover:bg-white hover:text-black text-white font-bold border border-gray-700 rounded shadow-sm text-sm py-2 md:px-6 px-4"          
        >Save</button>
      </div>
    </div>
  </div>

  <!-- Your Avatar -->
  <div class="max-w-3xl mx-auto sm:px-6 lg:px-8 mt-10">
    <div class="overflow-hidden shadow-sm bg-white rounded-md border border-gray-200">
      <div class="flex flex-col p-4">
        <div>
          <label for="yourusername" class="font-semibold text-2xl">Your Avatar</label>
          <p class="text-sm mt-6">This is your avatar.</p>
          <p class="text-sm mt-6">Click on the avatar to upload a custom one from your files.</p>
        </div>       
      </div>

      <!-- card footer -->
      <div
        class="py-2 px-6 bg-gray-100 border-gray-200 text-right rounded-b-md flex justify-between"
      >
        <!-- button link -->
        <p class="text-sm mt-2">An avatar is optional but strongly recommended.</p>
        <button
          class="bg-black hover:bg-white hover:text-black text-white font-bold border border-gray-700 rounded shadow-sm text-sm py-2 md:px-6 px-4"          
        >Save</button>
      </div>
    </div>
  </div>

  <!-- Delete Account -->
  <div class="max-w-3xl mx-auto sm:px-6 lg:px-8 mt-10">
    <div class="overflow-hidden shadow-sm bg-white rounded-md border border-gray-200">
      <div class="flex flex-col p-4">
        <div>
          <label for="yourusername" class="font-semibold text-2xl">Delete Personal Account</label>
          <p class="text-sm mt-6">Permanently remove your Personal Account and all of its contents from the Vercel platform. This action is not reversible, so please continue with caution.</p>
        </div>       
      </div>

      <!-- card footer -->
      <div
        class="py-2 px-6 bg-gray-100 border-gray-200 text-right rounded-b-md flex justify-between"
      >
        <!-- button link -->
        <p class="text-sm mt-2"></p>
        <button
          class="bg-red-600 hover:bg-white hover:text-red-600 text-white font-bold border border-red-600 rounded shadow-sm text-sm py-2 md:px-6 px-4"         
        >Delete Personal Account</button>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {};
</script>

<style>
</style>