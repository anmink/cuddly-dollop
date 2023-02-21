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
  <div>
    <Navbar />
    <SectionCard
      button
      filename="wardrope.png"
      buttonText="Join the community"
      headline="Welcome to the
future of fashion"
      paragraph="Tired of feeling uninspired by your wardrobe? Let us help you discover the hidden gems in your closet with the Outfit Recommendations App!"
    />
    <SectionCard
      button
      filename="clothes.png"
      buttonText="Join the community"
      headline="How it works"
      paragraph="Our app will revolutionize the way you get dressed every day. Simply upload pictures of your clothes, and we'll do the rest! Our AI-powered technology will generate personalized outfit suggestions based on the pieces you already own."
    />
    <SectionCard
      filename="lamp.png"
      buttonText="Join community"
      headline="Our mission"
      paragraph="Tired of feeling uninspired by your wardrobe? Let us help you discover the hidden gems in your closet with the Outfit Recommendations App!"
    />
    <SectionCard
      class="bg"
      input
      button
      filename="people.png"
      buttonText="Join community"
      headline="Say hello to effortless fashion"
      paragraph="Join our waiting list now and be the first to know when our app is available. Trust us, you won't want to miss this opportunity to elevate your fashion game."
    />
  </div>
</template>

<style scoped>
.bg {
  background-color: #d0e2de;
  border-radius: 20px;
}
</style>
