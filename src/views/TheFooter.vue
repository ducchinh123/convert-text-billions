<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <footer id="footer" class="footer footer-center text-footer">
    <div class="gr-gap">
          <RouterLink to="" class="link-hover ">Chính sách bảo mật</RouterLink>
        <RouterLink to="" class="link-hover ">Điều khoản sử dụng</RouterLink>
    </div>
    <div>
      <p class="copyright link-hover">© Billion ConverText 2024</p>
    </div>
  </footer>
</template>

<style>
.footer-center {
  border-top: 1px solid #e2e3e5;
  padding: 40px 0 80px 0;
  text-align: center;
}
.footer-center>*{
  display: grid;
  gap: .5rem;
}

.footer-center, 
.footer-center>* {
    place-items: center;
}

#footer,
#footer>* {
  display: grid;
  /* place-items: start; */
}

#footer{
  -moz-column-gap: 1rem;
    column-gap: 1rem;
    font-size: .875rem;
    grid-auto-flow: row;
    line-height: 1.25rem;
    row-gap: 2.5rem;
    width: 100%;
}
a {
    color: inherit;
    text-decoration: inherit;
}

@media (hover: hover) {
    .link-hover:hover {
        text-decoration-line: underline;
    }
}

.link-hover {
    text-decoration-line: none;
    cursor: pointer;
}


.footer{
  background-color: #f8f8f8;

}

@media (min-width: 48rem) {
  .text-footer{
    grid-auto-flow: column;
  }
}

@media (min-width: 48rem){
  .footer-center {
    grid-auto-flow: row dense;
  }
}

#footer ul li {
  list-style: none;
  display: inline-block;
  margin-left: 20px;
}

#footer ul li:hover a {
  text-decoration: underline;
}

.gr-gap{
  grid-auto-flow: column;
  gap: 1.5rem;
}

#footer ul li a {
  color: inherit;
  text-decoration: none;
}
</style>
