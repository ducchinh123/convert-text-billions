<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div id="header" class="header header-nav-bar">
    <div class="nav-menu-language">
      <div class="menu">
        <label class="btn btn-menu" for=""
          ><i
            style="font-size: 16px; font-weight: bold !important"
            class="bi bi-list"
          ></i>
          <span class="text-menu md:block hidden" style="font-size: 16px"
            >Menu</span
          ></label
        >
      </div>
      <div class="menu lg-dorp lg:inline-block hidden">
        <label for="" class="translate-btn btn btn-menu" data-bs-toggle="dropdown"
            aria-expanded="false"
          ><i style="font-size: 16px" class="bi bi-translate"></i>
          <span class="text-menu md:block hidden" style="font-size: 16px"
            >VI</span
          ></label
        >

        <div class="dropdown">
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#"><img src="../../public/assets/images/flag/viet-nam.png" alt="" style="width: 15px; padding-bottom: 4px;"> Tiếng Việt</a></li>
            <li><a class="dropdown-item" href="#"><img src="../../public/assets/images/flag/nuoc-anh.png" alt="" style="width: 15px; padding-bottom: 4px;"> Tiếng Anh</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="nav-header-center">
      <h1
        style="font-size: 36px; padding-bottom: 5px;"
        class="text-lg sm:max-full sm:text text-center"
      >
        <RouterLink to="/" style="color: unset; text-decoration: none"
          >{{ $t('logo_text') }}</RouterLink
        >
      </h1>
    </div>
    <div class="nav-header-end">
      <div class="header-item dark-mode">
        <label id="dark" class="" for=""
          ><i class="bi bi-moon-stars"></i
        ></label>
        <label id="light" class="hidden" for=""
          ><i class="bi bi-brightness-high-fill"></i
        ></label>
      </div>
    </div>
  </div>
</template>
<style scoped>
.hidden {
  display: none;
}

.header-nav-bar {
  align-items: center;
  display: flex;
  min-height: 4rem;
  padding: var(--navbar-padding, 0.5rem);
  border-bottom: 1px solid #e2e3e5;
  width: 100%;
}
.nav-menu-language {
  justify-content: flex-start;
  width: 50%;
}
:where(.header-nav-bar > :not(script, style)) {
  align-items: center;
  display: inline-flex;
}
.btn-menu {
  display: flex;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  background-color: transparent;
  border-color: transparent;
  border-width: 1px;
  line-height: 1rem;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  color: currentColor;
  outline-color: currentColor;
  gap: 0.5rem;
  justify-content: center;
}

.text-menu {
  line-height: 1rem;
}

.lg-dorp {
  position: relative;
}

@media (min-width: 768px) {
  .md\:block {
    display: block;
  }
}

/* @media (min-width: 640px){
  .lg\:inline-block
} */

@media (min-width: 640px) {
  .lg\:inline-block {
    display: inline-block;
  }
}

@media (min-width: 640px) {
  .sm\:text {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
}

@media (min-width: 640px) {
  .sm\:max-full {
    max-width: 100%;
  }
}

.nav-header-end {
  justify-content: flex-end;
  width: 50%;
  display: inline-flex;
  align-items: center;
}

.nav-header-center {
  flex-shrink: 0;
  display: inline-flex;
}
.nav-header-center h1.text-center {
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.light-mode {
  padding-left: 30px;
  text-align: right;
}
.header {
  background-color: #f8f8f8;
}

#header .header-item h1 {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 0;
}

#header .header-item:first-child {
  padding-left: 30px;
  text-align: right;
}

#header .header-item:last-child label {
  cursor: pointer;
  padding: 10px 16px;
  border-radius: 4px;
  transition: 0.3s;
}

#header .header-item:last-child label:hover {
  background-color: #ccced1;
}

#header .header-item:first-child label:last-child {
  margin-left: 10px;
}

#header .header-item:first-child label:first-child,
label:last-child:hover {
  cursor: pointer;
}

#header .menu label:first-child,
label:last-child {
  padding: 10px 16px;
  border-radius: 4px;
  transition: 0.3s;
}

#header .menu label:first-child:hover {
  background-color: #ccced1;
}

#header .menu label:last-child:hover {
  background-color: #ccced1;
}

@media screen and (max-width: 768px) {
  .text-lg {
    font-size: 1.125rem !important;
    margin-bottom: 0;
  }

  #header .header-item:first-child {
    padding-left: unset;
    text-align: unset;
  }

  #header .header-item:first-child label.translate-btn {
    display: none;
  }

  #header .header-item:first-child {
    text-align: unset;
  }

  #header .header-item-logo {
    padding-top: 10px !important;
    padding-right: unset !important;
  }

  #header .header-item:first-child label:last-child {
    margin-left: unset;
  }

  #header .menu label:first-child span {
    display: none;
  }
}
</style>
