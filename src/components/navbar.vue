<template>
  <div class="sticky top-4 z-50 mx-4 mb-8 md:mx-8">
    <div class="navbar border border-solid rounded-2xl backgroundBlur">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <a href="#how" class="font-mulish text-base m-2"
                >Wie es funktioniert</a
              >
            </li>
            <li>
              <a href="#mission" class="font-mulish text-base m-2"
                >Unsere Mission</a
              >
            </li>
            <li>
              <a href="#about" class="font-mulish text-base m-2">Über uns</a>
            </li>
            <li>
              <a href="#newsletter" class="font-mulish text-base m-2 md:hidden"
                >Join the community</a
              >
            </li>
          </ul>
        </div>
        <a
          href="#hero"
          class="p-4 font-bold bg-transparent normal-case text-xl hover:text-primary"
          >wearnize</a
        >
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a href="#how" class="font-mulish text-base">Wie es funktioniert</a>
          </li>
          <li>
            <a href="#mission" class="font-mulish text-base">Unsere Mission</a>
          </li>
          <li><a href="#about" class="font-mulish text-base">Über uns</a></li>
        </ul>
      </div>
      <div class="navbar-end hidden md:flex">
        <a
          href="#newsletter"
          class="px-6 py-3 rounded-2xl bg-primary text-white text-base font-mulish hover:bg-accent"
        >
          SEI DABEI!
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.backgroundBlur {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
}
</style>
