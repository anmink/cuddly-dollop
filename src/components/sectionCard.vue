<script>
import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  props: {
    input: Boolean,
    newsletter: Boolean,
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
  <div class="p-4 mx-4 mb-24 md:p-10 md:mx-8 lg:mx-20 lg:p-20 xl:mx-40 xl:p-20">
    <div class="flex flex-col md:flex-row">
      <div class="basis-2/4 order-2 md:order-1 md:self-center md:mr-4">
        <h2 class="font-newsreader text-3xl mb-2">{{ headline }}</h2>
        <p class="font-mulish text-base mb-4">
          {{ paragraph }}
        </p>
        <!-- Begin Mailchimp Signup Form -->
        <div v-if="newsletter" id="mc_embed_signup">
          <form
            action="https://wearnize.us10.list-manage.com/subscribe/post?u=fdb7bc42c42029cf61ec810b4&amp;id=33e69dbb03&amp;f_id=0056c5e5f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_self"
          >
            <div
              id="mc_embed_signup_scroll"
              class="validate flex flex-col xl:flex-row xl:w-full xl:space-x-4"
            >
              <input
                type="email"
                value=""
                name="EMAIL"
                class="order-1 border border-solid rounded-2xl py-3 px-3 mb-2 text-gray-900 text-base font-mulish xl:w-4/5 xl:mb-0"
                id="mce-EMAIL"
                placeholder="E-Mailadresse"
                required
              />
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px" aria-hidden="true">
                <input
                  type="text"
                  name="b_fdb7bc42c42029cf61ec810b4_33e69dbb03"
                  tabindex="-1"
                  value=""
                />
              </div>

              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="order-2 px-6 py-3 rounded-2xl bg-primary text-white text-base font-mulish hover:bg-accent"
              />
            </div>
          </form>
        </div>

        <!--End mc_embed_signup-->
        <!-- <form
          class="flex flex-col xl:flex-row xl:w-full xl:space-x-4"
          name="contact"
          method="POST"
          data-netlify="true"
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
            type="submit"
            v-if="button"
            @click="submit"
            class="order-2 px-6 py-3 rounded-2xl bg-primary text-white text-base font-mulish hover:bg-accent"
          >
            {{ buttonText }}
          </button>
        </form> -->
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
        class="flex basis-2/4 justify-center self-center order-1 md:order-2 mb-2"
      >
        <img :src="getImageUrl(filename)" class="w-full p-4" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
