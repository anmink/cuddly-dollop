<script>
import lamp from '../assets/lamp.png'

export default {
  components: {
    lamp,
  },
  props: {
    input: Boolean,
    button: Boolean,
    headline: String,
    paragraph: String,
    buttonText: String,
    filename: String,
  },
}
</script>

<template>
  <div
    class="p-4 mx-4 md:p-10 md:mx-8 lg:mx-20 lg:p-20 xl:mx-40 xl:p-20 border-2"
  >
    <div class="flex flex-col md:flex-row">
      <div
        class="basis-3/5 order-2 md:order-1 md:self-center md:mr-4 border-solid border-2"
      >
        <h2 class="font-newsreader text-3xl mb-2">{{ headline }}</h2>
        <p class="font-mulish text-base mb-4">
          {{ paragraph }}
        </p>
        <div class="flex flex-col xl:flex-row xl:w-full xl:space-x-4">
          <input
            v-if="input"
            class="order-1 border border-solid rounded-2xl py-3 px-3 mb-2 text-gray-900 text-base font-mulish xl:w-3/5 xl:mb-0"
            type="email"
            placeholder="E-Mailadresse hinterlassen"
            required
          />
          <button
            v-if="button"
            class="order-2 px-6 py-3 rounded-2xl bg-primary text-white text-base font-mulish"
          >
            {{ buttonText }}
          </button>
        </div>
      </div>
      <div
        class="flex basis-2/5 border-solid border-2 justify-center self-center order-1 md:order-2 mb-2"
      >
        <img src="../assets/lamp.png" class="w-max p-4" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
