<template>
  <div
    class="flex lg:flex-row flex-col -mt-8 items-center lg:items-start px-4 mx-4 mb-8 md:px-10 md:mx-8 lg:mx-20 lg:px-20 xl:mx-40 xl:px-20"
  >
    <InfoTag
      content="Mache ein Foto von deinen Kleidungen"
      filename="camera.svg"
    />
    <img
      src="../assets/arrow-right.svg"
      class="w-8 h-8 my-4 my-6 lg:mx-8 rotate-90 lg:rotate-0"
    />
    <InfoTag
      content="Dein Kleiderschrank wird digitalisiert"
      filename="closet.svg"
    />
    <img
      src="../assets/arrow-right.svg"
      class="w-8 h-8 my-4 my-6 lg:mx-8 rotate-90 lg:rotate-0"
    />
    <InfoTag
      content="Bekomme persönliche Outfitvorschläge"
      filename="magicpen.svg"
    />
    <img
      src="../assets/arrow-right.svg"
      class="w-8 h-8 my-4 my-6 lg:mx-8 rotate-90 lg:rotate-0"
    />
    <InfoTag
      content="Kein Tag, an dem du nicht weiß, was du anziehen sollst"
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
