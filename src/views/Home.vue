<script>
import SectionCard from '../components/sectionCard.vue'
import Navbar from '../components/navbar.vue'
import StepSection from '../components/stepSection.vue'
import Footer from '../components/footer.vue'

export default {
  components: {
    SectionCard,
    Navbar,
    StepSection,
    Footer,
  },
}
</script>

<template>
  <div>
    <div id="hero"></div>
    <Navbar />
    <SectionCard
      button
      filename="wardrope.png"
      buttonText="Jetzt Einblick erhalten"
      headline="Willkommen in der
Zukunft der Mode"
      paragraph="Bist du es leid, nicht zu wissen was du heute anziehen sollst?

Dann lass dir neue Outfit-Inspirationen aus deinem Kleiderschrank vorschlagen mit unserer App."
    />
    <div class="mb-20"></div>
    <SectionCard
      id="how"
      button
      filename="clothes.png"
      buttonText="Jetzt Einblick erhalten"
      headline="Wie es funktioniert"
      paragraph="Unsere App wird die Art und Weise, wie du dich täglich anziehst, neu gestalten. Laden Sie einfach Bilder Ihrer Kleidung per Foto hoch, und unsere App erledigen den Rest! Unsere KI-gestützte Technologie generiert personalisierte Outfitvorschläge, die auf deinen Kleidungsstücken basieren, die du bereits besitzt."
    />
    <StepSection />
    <div class="mb-20"></div>
    <SectionCard
      id="mission"
      filename="lamp.png"
      buttonText="Jetzt Einblick erhalten"
      headline="Unsere Mission"
      paragraph="Mode ist allgegenwärtig und hat einen tiefgreifenden Einfluss darauf, wie wir uns selbst fühlen und wie wir uns der Welt präsentieren wollen. Wir sind der Meinung, dass sich jeder durch die richtige Auswahl seiner Kleidung selbstbewusster und stillvoller fühlen soll."
    />
    <div class="mb-20"></div>
    <SectionCard
      id="about"
      filename="lamp.png"
      buttonText="Jetzt Einblick erhalten"
      headline="Über uns"
      paragraph="Die Idee einen eigenen persönlichen Modeberater zu haben schlummert schon seit ein paar Jahren in unseren Köpfen. Dabei würden wir uns jetzt nicht als DIE Fashionistas bezeichnen, aber diejenigen die sich gerne vielfältig kleiden. Nachdem aus der Idee eine Bachelorarbeit wurde und künstliche Intelligenz im Laufe der Zeit zugänglicher wurde, haben wir uns nun entschlossen aus der Idee Realität werden zu lassen. Begleitet uns auf dem Weg und werdet ein Teil davon! 😊"
    />
    <SectionCard
      id="newsletter"
      class="bg"
      input
      button
      newsletter
      filename="people.png"
      buttonText="Jetzt Einblick erhalten"
      headline="Werde ein Teil der Smart-Fashion Community"
      paragraph="Trag dich zu unserem Newsletter ein und werde ein Teil der Community. Erfahre als Erste/r die neusten Neuigkeiten und gestalte unser Vorhaben Fashion smarter zu gestalten mit."
    />
    <Footer />
  </div>
</template>

<style scoped>
.bg {
  background-color: #d0e2de;
  border-radius: 20px;
}
</style>
