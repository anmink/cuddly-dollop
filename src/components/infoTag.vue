<template>
  <div class="flex flex-col items-center w-80 lg:w-40">
    <div
      class="w-16 h-16 bg-[#72A79B] rounded-full flex justify-center items-center mb-4"
    >
      <img :src="getImageUrl(filename)" class="w-8 h-8" />
    </div>
    <p class="font-mulish text-lg text-center">{{ content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
    filename: String,
  },

  methods: {
    getImageUrl(filename) {
      return new URL(`../assets/${filename}`, import.meta.url).href
    },
  },
}
</script>
