<template>
  <footer>
    <Logo />
    <a
      href="https://github.com/Amylo-jh"
      target="_blank">
      (c){{ new Date().getFullYear() }} Amylo
    </a>
  </footer>
</template>

<script>
import Logo from '~/components/Logo'
export default {
    components: {
        Logo
    }
}
</script>

<style>
footer {
    padding: 70px 0;
    text-align: center;
    opacity:.3;
    .logo {
        display: block;
        margin-bottom: 4px;
    }
}
</style>