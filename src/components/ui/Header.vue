<template>
   <nav class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
         <a class="navbar-item" href="https://bulma.io">
            Appony
         </a>
         </a>
      </div>
   </nav>
</template>
<script>
export default {
   name: 'Header'
}
</script>
<style lang="scss" scoped>
@import './../../../_colors';
   .navbar {
      background-color: $taupe;
      .navbar-item {
         font-weight: bold;
         text-transform: uppercase;
      }
   }
</style>