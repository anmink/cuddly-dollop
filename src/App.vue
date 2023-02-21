<script>
import SectionCard from './components/sectionCard.vue'
import Navbar from './components/navbar.vue'

export default {
  components: {
    SectionCard,
    Navbar,
  },
}
</script>

<template>
  <div>hi</div>
  <Navbar />
  <SectionCard
    input
    button
    filename="lamp.png"
    buttonText="Join community"
    headline="Our mission"
    paragraph="Tired of feeling uninspired by your wardrobe? Let us help you discover the hidden gems in your closet with the Outfit Recommendations App!"
  />
  <SectionCard
    input
    button
    filename="lamp.png"
    buttonText="Join community"
    headline="Our mission"
    paragraph="Tired of feeling uninspired by your wardrobe? Let us help you discover the hidden gems in your closet with the Outfit Recommendations App!"
  />
  <SectionCard
    input
    button
    filename="lamp.png"
    buttonText="Join community"
    headline="Our mission"
    paragraph="Tired of feeling uninspired by your wardrobe? Let us help you discover the hidden gems in your closet with the Outfit Recommendations App!"
  />
</template>

<style scoped></style>
