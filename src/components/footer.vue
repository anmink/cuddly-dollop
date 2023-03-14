<template>
  <footer class="footer footer-center p-10 bg-primary text-white">
    <div>
      <img src="../assets/LogoWeiß.png" class="w-40" />
      <p class="font-bold">wearnize. <br />Wenn Fashion smart wird</p>
      <p>Copyright © 2023 - All right reserved</p>
    </div>
    <div>
      <div class="grid grid-flow-col gap-4">
        <a href="https://www.instagram.com/wearnize/" target="_blank"
          ><img src="../assets/instagram.svg"
        /></a>

        <a href="mailto:wearnize@gmail.com"><img src="../assets/sms.svg" /></a>
      </div>
    </div>
    <div>
      <div class="grid grid-flow-col gap-4">
        <button @click="this.$router.push('/impressum')" class="cursor-pointer">
          Impressum
        </button>
        <button
          @click="this.$router.push('/datenschutz')"
          class="cursor-pointer"
        >
          Datenschutz
        </button>
      </div>
    </div>
  </footer>
</template>
