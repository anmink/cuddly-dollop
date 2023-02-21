<script>
import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  props: {
    input: Boolean,
    button: Boolean,
    headline: String,
    paragraph: String,
    buttonText: String,
    filename: String,
  },
  data() {
    return {
      v$: useValidate(),
      email: '',
      errorMsg: false,
      successMsg: false,
    }
  },
  methods: {
    getImageUrl(filename) {
      return new URL(`../assets/${filename}`, import.meta.url).href
    },
    submit() {
      this.v$.$validate() // checks all inputs
      if (!this.v$.$error) {
        // if ANY fail validation
        this.successMsg = true
        this.errorMsg = false
        this.email = ''
      } else {
        this.errorMsg = true
        this.successMsg = false
      }
    },
  },
  validations() {
    return {
      email: { required, email },
    }
  },
}
</script>

<template>
  <div
    class="p-4 mx-4 mb-8 md:p-10 md:mx-8 lg:mx-20 lg:p-20 xl:mx-40 xl:p-20 border-2"
  >
    <div class="flex flex-col md:flex-row">
      <div
        class="basis-2/4 order-2 md:order-1 md:self-center md:mr-4 border-solid border-2"
      >
        <h2 class="font-newsreader text-3xl mb-2">{{ headline }}</h2>
        <p class="font-mulish text-base mb-4">
          {{ paragraph }}
        </p>
        <form
          method="POST"
          data-netlify="true"
          class="flex flex-col xl:flex-row xl:w-full xl:space-x-4"
        >
          <input
            v-if="input"
            class="order-1 border border-solid rounded-2xl py-3 px-3 mb-2 text-gray-900 text-base font-mulish xl:w-3/5 xl:mb-0"
            type="email"
            placeholder="E-Mailadresse hinterlassen"
            required
            v-model="email"
          />
          <button
            v-if="button"
            @click="submit"
            class="order-2 px-6 py-3 rounded-2xl bg-primary text-white text-base font-mulish hover:bg-accent"
          >
            {{ buttonText }}
          </button>
        </form>
        <p class="text-sm font-mulish text-rose-600 font-bold" v-if="errorMsg">
          Sieht aus als würde deine Mailadresse nicht ganz richtig aussehen 😬
        </p>
        <p
          class="text-sm font-mulish text-lime-600 font-bold"
          v-if="successMsg"
        >
          Hey! Du hast dich erfolgreich bei uns ins Freundebuch eingetragen!
          Schon bald schreiben wir dir 🥳
        </p>
      </div>
      <div
        class="flex basis-2/4 border-solid border-2 justify-center self-center order-1 md:order-2 mb-2"
      >
        <img :src="getImageUrl(filename)" class="w-max p-4" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
