<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div id="footer">
    <div>
      <ul>
        <li><RouterLink to="">Chính sách bảo mật</RouterLink></li>
        <li><RouterLink to="">Điều khoản sử dụng</RouterLink></li>
      </ul>
      <p class="copyright">© Billion ConverText 2024</p>
    </div>
  </div>
</template>

<style>
#footer {
  border-top: 1px solid #e2e3e5;
  background-color: #f8f8f8;
  padding: 10px 0;
  text-align: center;
}

#footer div {
  margin-left: 20px;
}

#footer ul li {
  list-style: none;
  display: inline-block;
  margin-left: 20px;
}

#footer ul li:hover a {
  text-decoration: underline;
}

#footer ul li a {
  color: inherit;
  text-decoration: none;
}
</style>
