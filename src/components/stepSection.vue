<template>
  <div
    class="flex lg:flex-row flex-col -mt-8 items-center lg:items-start px-4 mx-4 mb-8 md:px-10 md:mx-8 lg:mx-20 lg:px-20 xl:mx-40 xl:px-20"
  >
    <InfoTag content="take a picture of your clothes" filename="camera.svg" />
    <img
      src="../assets/arrow-right.svg"
      class="w-8 h-8 my-4 my-6 lg:mx-8 rotate-90 lg:rotate-0"
    />
    <InfoTag content="get an overview of your closet" filename="closet.svg" />
    <img
      src="../assets/arrow-right.svg"
      class="w-8 h-8 my-4 my-6 lg:mx-8 rotate-90 lg:rotate-0"
    />
    <InfoTag
      content="let the magic happen and get your outfit recommendation"
      filename="magicpen.svg"
    />
    <img
      src="../assets/arrow-right.svg"
      class="w-8 h-8 my-4 my-6 lg:mx-8 rotate-90 lg:rotate-0"
    />
    <InfoTag
      content="no day without no idea what to wear"
      filename="emoji.svg"
    />
  </div>
</template>

<script>
import InfoTag from './infoTag.vue'

export default {
  components: {
    InfoTag,
  },
}
</script>
